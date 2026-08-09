import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import type { ContactApiResponse, ContactFormData } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

/**
 * Default sender. Resend's `onboarding@resend.dev` works without domain
 * verification for testing; swap for an address on your verified domain
 * (e.g. "Verico <hello@verico.dev>") in production.
 */
const FROM_ADDRESS = "Verico Contact <onboarding@resend.dev>";

/** Narrow unknown JSON into a validated ContactFormData, or return an error. */
function parseBody(
  body: unknown,
): { ok: true; data: ContactFormData } | { ok: false; error: string } {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Request body must be a JSON object." };
  }

  const record = body as Record<string, unknown>;
  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const message =
    typeof record.message === "string" ? record.message.trim() : "";

  if (!name || !email || !message) {
    return { ok: false, error: "Name, email, and message are all required." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "Please provide a valid email address." };
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return {
      ok: false,
      error: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
    };
  }

  return { ok: true, data: { name, email, message } };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function json(
  payload: ContactApiResponse,
  status: number,
): NextResponse<ContactApiResponse> {
  return NextResponse.json(payload, { status });
}

export async function POST(
  request: Request,
): Promise<NextResponse<ContactApiResponse>> {
  const contactEmail = process.env.CONTACT_EMAIL;
  if (!contactEmail) {
    return json(
      { success: false, error: "Contact endpoint is not configured." },
      500,
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return json(
      { success: false, error: "Invalid JSON in request body." },
      400,
    );
  }

  const parsed = parseBody(rawBody);
  if (!parsed.ok) {
    return json({ success: false, error: parsed.error }, 400);
  }

  const { name, email, message } = parsed.data;

  try {
    const resend = getResend();

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: contactEmail,
      replyTo: email,
      subject: `New scope request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<h2>New scope request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    });

    if (error) {
      // Surface the provider error server-side; return a safe message.
      console.error("Resend send failed:", error);
      return json(
        {
          success: false,
          error: "We couldn't send your message. Please try again later.",
        },
        502,
      );
    }

    return json(
      { success: true, message: "Message sent successfully." },
      200,
    );
  } catch (caught) {
    const detail =
      caught instanceof Error ? caught.message : "Unknown error.";
    console.error("Contact route error:", detail);
    return json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      500,
    );
  }
}
