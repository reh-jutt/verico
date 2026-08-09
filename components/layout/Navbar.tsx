import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";
import { Button } from "@/components/ui/Button";
import { VericoMark } from "@/components/icons/VericoMark";
import { PRIMARY_CTA, ROUTES, SITE_CONFIG } from "@/lib/constants";

/**
 * Sticky top navigation. Server component; route-active link styling and
 * the small-screen menu are delegated to client child components.
 */
export function Navbar(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-2 bg-ink/80 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href={ROUTES.home}
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          aria-label={`${SITE_CONFIG.name} home`}
        >
          <VericoMark className="h-7 w-7 text-gold" />
          <span className="font-display text-lg font-bold tracking-tight text-fog-bright">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <NavLinks />

        <div className="hidden md:block">
          <Button href={PRIMARY_CTA.href} variant="primary">
            {PRIMARY_CTA.label}
          </Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
