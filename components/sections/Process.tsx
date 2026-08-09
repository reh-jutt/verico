import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_CONTENT, PROCESS_STEPS } from "@/lib/content";

/**
 * Process: four ProcessStep cells in a bordered grid
 * (4-col desktop, 2-col tablet, 1-col mobile).
 */
export function Process(): React.JSX.Element {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-b border-navy-2"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={PROCESS_CONTENT.eyebrow}
          heading={PROCESS_CONTENT.heading}
          description={PROCESS_CONTENT.description}
          headingId="process-heading"
        />

        {/* gap-px over a navy-2 background renders crisp 1px separators at
            any column count, avoiding brittle nth-child border rules. */}
        <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-navy-2 bg-navy-2 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <li
              key={step.number}
              className="bg-ink p-6 sm:p-8"
            >
              <span className="font-mono text-sm font-medium text-gold">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-fog-bright">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-fog">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
