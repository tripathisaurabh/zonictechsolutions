export type LeadPayload = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

type ZohoTokenResponse = {
  access_token: string;
  expires_in: number;
  api_domain?: string;
  token_type?: string;
};

type ZohoInsertResponse = {
  data?: Array<{
    status?: string;
    code?: string;
    message?: string;
    details?: Record<string, unknown>;
  }>;
};

const tokenCache: {
  accessToken: string | null;
  expiresAt: number;
  apiDomain: string | null;
} = {
  accessToken: null,
  expiresAt: 0,
  apiDomain: null
};

const ONE_MINUTE = 60_000;

const normalizeUrl = (value: string) => value.replace(/\/+$/, "");

const requireEnv = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name} environment variable`);
  }
  return value;
};

const splitName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return { firstName: undefined, lastName: "Unknown" };
  }
  if (parts.length === 1) {
    return { firstName: undefined, lastName: parts[0] };
  }
  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts[parts.length - 1]
  };
};

const getApiDomain = (tokenResponse?: ZohoTokenResponse) => {
  if (tokenResponse?.api_domain) {
    return normalizeUrl(tokenResponse.api_domain);
  }
  const envDomain = process.env.ZOHO_API_DOMAIN;
  if (envDomain) {
    return normalizeUrl(envDomain);
  }
  return "https://www.zohoapis.com";
};

const getAccountsDomain = () =>
  normalizeUrl(process.env.ZOHO_ACCOUNTS_DOMAIN ?? "https://accounts.zoho.com");

const getAccessToken = async () => {
  if (tokenCache.accessToken && Date.now() < tokenCache.expiresAt) {
    return tokenCache.accessToken;
  }

  const refreshToken = requireEnv("ZOHO_REFRESH_TOKEN");
  const clientId = requireEnv("ZOHO_CLIENT_ID");
  const clientSecret = requireEnv("ZOHO_CLIENT_SECRET");

  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "refresh_token"
  });

  const response = await fetch(`${getAccountsDomain()}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString()
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Zoho token refresh failed: ${response.status} ${errorText}`);
  }

  const data = (await response.json()) as ZohoTokenResponse;
  tokenCache.accessToken = data.access_token;
  tokenCache.expiresAt = Date.now() + data.expires_in * 1000 - ONE_MINUTE;
  tokenCache.apiDomain = getApiDomain(data);

  return data.access_token;
};

export async function createLead(payload: LeadPayload) {
  const { firstName, lastName } = splitName(payload.fullName);
  const company = payload.company?.trim() || "Not Provided";
  const apiVersion = process.env.ZOHO_CRM_API_VERSION ?? "v2";
  const accessToken = await getAccessToken();
  const apiDomain = tokenCache.apiDomain ?? getApiDomain();

  const record: Record<string, string> = {
    Last_Name: lastName,
    Company: company,
    Email: payload.email,
    Description: payload.message,
    Lead_Source: "Website"
  };

  if (firstName) record.First_Name = firstName;
  if (payload.phone) record.Phone = payload.phone;

  const response = await fetch(`${apiDomain}/crm/${apiVersion}/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data: [record] })
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(`Zoho lead creation failed: ${response.status} ${responseText}`);
  }

  const data = responseText ? (JSON.parse(responseText) as ZohoInsertResponse) : {};
  const status = data.data?.[0]?.status?.toLowerCase();

  if (status !== "success") {
    throw new Error(`Zoho lead creation failed: ${responseText}`);
  }

  return { success: true };
}
