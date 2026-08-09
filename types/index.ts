/**
 * Shared domain types for the Verico marketing site.
 * Every section component and content object is typed against these.
 */

export interface ServiceItem {
  /** Two-digit ordinal, e.g. "01". */
  readonly number: string;
  readonly title: string;
  readonly description: string;
  /** Concrete deliverables/coverage shown on the Services page. */
  readonly includes: readonly string[];
}

export interface ProcessStep {
  /** Two-digit ordinal, e.g. "01". */
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface WhyItem {
  readonly title: string;
  readonly description: string;
}

export interface ValueItem {
  readonly title: string;
  readonly description: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

/** A single result row rendered inside the animated TerminalPanel. */
export interface TerminalLine {
  readonly label: string;
  readonly status: "passed" | "flagged";
}

/** Reusable call-to-action shape (buttons, banners). */
export interface CallToAction {
  readonly label: string;
  readonly href: string;
}

/** Shape of the contact form payload sent to /api/contact. */
export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

/** Discriminated union returned by the /api/contact route. */
export type ContactApiResponse =
  | { readonly success: true; readonly message: string }
  | { readonly success: false; readonly error: string };

/** Async status used by the useContactForm hook. */
export type ContactStatus = "idle" | "submitting" | "success" | "error";
