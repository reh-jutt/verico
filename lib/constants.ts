import type { NavLink } from "@/types";

/**
 * Site-wide configuration, contact details, and navigation.
 *
 * NOTE: contact values below are PLACEHOLDERS for a brand-new agency.
 * Replace `hello@verico.dev`, the WhatsApp number, and the LinkedIn URL
 * with real details before launch. The WhatsApp number is also read from
 * NEXT_PUBLIC_WHATSAPP_NUMBER at runtime when present.
 */

export const SITE_CONFIG = {
  name: "Verico",
  /** Canonical production URL — update once the domain is live. */
  url: "https://verico.dev",
  tagline: "Ship fast. Don't ship bugs.",
  description:
    "Verico is a QA testing agency for teams shipping at AI speed. Manual QA, API testing, and developer-ready bug reports with fast turnaround.",
} as const;

/** Canonical route paths, referenced everywhere instead of raw strings. */
export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
} as const;

/** WhatsApp number in digits only (country code + number), no symbols. */
const WHATSAPP_NUMBER: string =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "92XXXXXXXXXX";

export const CONTACT = {
  email: "hello@verico.dev",
  /** Whether the values above are still placeholders (drives UI hints). */
  isPlaceholder: true,
  whatsapp: {
    number: WHATSAPP_NUMBER,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    label: "WhatsApp",
  },
  linkedin: {
    href: "https://linkedin.com/",
    label: "LinkedIn",
  },
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "Services", href: ROUTES.services },
  { label: "Contact", href: ROUTES.contact },
] as const;

/** Primary call-to-action reused by the navbar, hero, and CTA banners. */
export const PRIMARY_CTA = {
  label: "Get a scope call",
  href: ROUTES.contact,
} as const;
