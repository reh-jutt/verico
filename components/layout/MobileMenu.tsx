"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, PRIMARY_CTA, ROUTES } from "@/lib/constants";

function isActive(href: string, pathname: string): boolean {
  if (href === ROUTES.home) return pathname === ROUTES.home;
  return pathname === href || pathname.startsWith(`${href}/`);
}

/**
 * Responsive hamburger menu for viewports below the `md` breakpoint.
 * Tracks open state and exposes it via aria-expanded / aria-controls.
 */
export function MobileMenu(): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const panelId = "mobile-menu-panel";

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const close = (): void => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy-2 text-fog-bright transition-colors hover:border-steel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id={panelId}
          className="absolute left-0 right-0 top-full border-b border-navy-2 bg-ink/95 px-4 py-6 backdrop-blur"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-lg px-3 py-3 font-body text-base transition-colors hover:bg-navy hover:text-fog-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                    active ? "bg-navy text-fog-bright" : "text-fog",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              href={PRIMARY_CTA.href}
              variant="primary"
              onClick={close}
              className="mt-3 w-full"
            >
              {PRIMARY_CTA.label}
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
