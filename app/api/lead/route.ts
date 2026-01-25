import { NextResponse } from "next/server";
import { createLead, LeadPayload } from "../../../lib/crm";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    if (!body.fullName || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    await createLead({
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      company: body.company,
      message: body.message
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
