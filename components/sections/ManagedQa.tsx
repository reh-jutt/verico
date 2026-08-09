import { Button } from "@/components/ui/Button";
import { MANAGED_QA } from "@/lib/content";

/**
 * ManagedQa: the core "hand off your QA and keep building" pitch.
 * Reused on the Home and Services pages.
 */
export function ManagedQa(): React.JSX.Element {
  return (
    <section
      aria-labelledby="managed-qa-heading"
      className="border-b border-navy-2"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="rounded-2xl border border-navy-2 bg-navy/50 p-8 sm:p-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold">
              {MANAGED_QA.eyebrow}
            </span>
            <h2
              id="managed-qa-heading"
              className="mt-4 font-display text-3xl font-bold leading-tight text-fog-bright sm:text-4xl"
            >
              {MANAGED_QA.heading}
            </h2>
            <p className="mt-5 font-body text-lg leading-relaxed text-fog">
              {MANAGED_QA.lead}
            </p>
          </div>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {MANAGED_QA.points.map((point) => (
              <li
                key={point.title}
                className="border-l-2 border-gold bg-ink/40 py-2 pl-6"
              >
                <h3 className="font-display text-base font-bold text-fog-bright">
                  {point.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-fog">
                  {point.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-5 border-t border-navy-2 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl font-body text-base italic leading-relaxed text-fog-bright">
              {MANAGED_QA.closing}
            </p>
            <Button
              href={MANAGED_QA.cta.href}
              variant="primary"
              className="sm:flex-shrink-0"
            >
              {MANAGED_QA.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
