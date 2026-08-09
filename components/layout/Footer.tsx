import Link from "next/link";
import { VericoMark } from "@/components/icons/VericoMark";
import { FOOTER_CONTENT } from "@/lib/content";
import { CONTACT, NAV_LINKS, ROUTES, SITE_CONFIG } from "@/lib/constants";

/**
 * Site footer: logo, tagline, quick links, and copyright.
 * All copy and links come from lib/constants and lib/content.
 */
export function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-2 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Link
            href={ROUTES.home}
            className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            aria-label={`${SITE_CONFIG.name} home`}
          >
            <VericoMark className="h-6 w-6 text-gold" />
            <span className="font-display text-base font-bold tracking-tight text-fog-bright">
              {SITE_CONFIG.name}
            </span>
          </Link>
          <p className="mt-4 font-body text-sm leading-relaxed text-fog">
            {FOOTER_CONTENT.tagline}
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-steel">
            Navigate
          </span>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-fog transition-colors hover:text-fog-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Contact" className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-steel">
            Contact
          </span>
          <a
            href={`mailto:${CONTACT.email}`}
            className="font-body text-sm text-fog transition-colors hover:text-fog-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-fog transition-colors hover:text-fog-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {CONTACT.whatsapp.label}
          </a>
          <a
            href={CONTACT.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-fog transition-colors hover:text-fog-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            {CONTACT.linkedin.label}
          </a>
        </nav>
      </div>

      <div className="border-t border-navy-2">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="font-body text-xs text-steel">
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
