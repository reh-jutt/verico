export interface PageHeroProps {
  eyebrow: string;
  heading: string;
  subhead?: string;
}

/**
 * Compact hero used at the top of interior pages (About, Services,
 * Contact). Renders the page's <h1>, so use exactly once per page.
 */
export function PageHero({
  eyebrow,
  heading,
  subhead,
}: PageHeroProps): React.JSX.Element {
  return (
    <section className="border-b border-navy-2">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex max-w-3xl flex-col gap-5">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </span>
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-fog-bright sm:text-5xl">
            {heading}
          </h1>
          {subhead ? (
            <p className="font-body text-lg leading-relaxed text-fog">
              {subhead}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
