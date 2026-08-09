import { Button } from "@/components/ui/Button";
import { CTA_BAND } from "@/lib/content";

/**
 * Reusable closing call-to-action band shown near the foot of most pages.
 */
export function CtaBand(): React.JSX.Element {
  return (
    <section aria-labelledby="cta-heading" className="border-b border-navy-2">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-navy-2 bg-navy/50 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2
              id="cta-heading"
              className="font-display text-2xl font-bold leading-tight text-fog-bright sm:text-3xl"
            >
              {CTA_BAND.heading}
            </h2>
            <p className="mt-3 font-body text-base leading-relaxed text-fog">
              {CTA_BAND.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-shrink-0">
            <Button href={CTA_BAND.primaryCta.href} variant="primary">
              {CTA_BAND.primaryCta.label}
            </Button>
            <Button href={CTA_BAND.secondaryCta.href} variant="ghost">
              {CTA_BAND.secondaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
