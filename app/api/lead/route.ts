import { NextResponse } from "next/server";
import { createLead } from "../../../lib/crm";

type LeadRequest = {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
};

export const runtime = "nodejs";

const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

export async function POST(request: Request) {
  let payload: LeadRequest;

  try {
    payload = (await request.json()) as LeadRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const fullName = payload.fullName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!fullName) {
    return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  try {
    await createLead({
      fullName,
      email,
      phone: payload.phone?.trim() || undefined,
      company: payload.company?.trim() || undefined,
      message
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went wrong while submitting the lead.";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
