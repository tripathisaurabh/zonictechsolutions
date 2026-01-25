export type LeadPayload = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};

export async function createLead(payload: LeadPayload) {
  // Placeholder for Zoho CRM integration
  console.info("Lead received for CRM", payload);
  return { success: true };
}
