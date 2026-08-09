"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, ROUTES } from "@/lib/constants";

/** True when `href` matches the current route (exact for home, prefix else). */
function useIsActive(href: string): boolean {
  const pathname = usePathname();
  if (href === ROUTES.home) {
    return pathname === ROUTES.home;
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function NavItem({ href, label }: { href: string; label: string }) {
  const active = useIsActive(href);
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={[
        "font-body text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        active ? "text-fog-bright" : "text-fog hover:text-fog-bright",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

/** Desktop primary navigation with active-route styling. */
export function NavLinks(): React.JSX.Element {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
      {NAV_LINKS.map((link) => (
        <NavItem key={link.href} href={link.href} label={link.label} />
      ))}
    </nav>
  );
}
