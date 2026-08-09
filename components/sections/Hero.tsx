import { Button } from "@/components/ui/Button";
import { TerminalPanel } from "@/components/ui/TerminalPanel";
import { HERO_CONTENT } from "@/lib/content";

/**
 * Hero: two-column on desktop, stacked on mobile. Left is copy + CTAs,
 * right is the animated TerminalPanel.
 */
export function Hero(): React.JSX.Element {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="border-b border-navy-2"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold">
            {HERO_CONTENT.eyebrow}
          </span>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-bold leading-[1.1] text-fog-bright sm:text-5xl lg:text-6xl"
          >
            {HERO_CONTENT.heading}
          </h1>
          <p className="max-w-xl font-body text-lg leading-relaxed text-fog">
            {HERO_CONTENT.subhead}
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button
              href={HERO_CONTENT.primaryCta.href}
              variant="primary"
            >
              {HERO_CONTENT.primaryCta.label}
            </Button>
            <Button
              href={HERO_CONTENT.secondaryCta.href}
              variant="ghost"
            >
              {HERO_CONTENT.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="lg:pl-4">
          <TerminalPanel />
        </div>
      </div>
    </section>
  );
}
