import { Resend } from "resend";

/**
 * Lazily-instantiated Resend client.
 *
 * We construct the client on first use rather than at module load so the
 * app can build without RESEND_API_KEY present (e.g. in CI). The API route
 * calls getResend() inside its handler and surfaces a typed error if the
 * key is missing at request time.
 */
let client: Resend | null = null;

export function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!client) {
    client = new Resend(apiKey);
  }

  return client;
}
