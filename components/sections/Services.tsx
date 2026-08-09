import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SERVICES,
  SERVICES_CONTENT,
  SERVICES_CONTENT_DETAILED,
} from "@/lib/content";
import { ROUTES } from "@/lib/constants";
import type { CallToAction } from "@/types";

export interface ServicesProps {
  /**
   * "preview" (default) shows compact cards for the home page;
   * "detailed" adds the per-service `includes` list for the services page.
   */
  variant?: "preview" | "detailed";
}

/**
 * Services: ServiceItem cards in a responsive grid. Presentational —
 * data comes from lib/content.ts.
 */
export function Services({
  variant = "preview",
}: ServicesProps): React.JSX.Element {
  const detailed = variant === "detailed";
  const content = detailed ? SERVICES_CONTENT_DETAILED : SERVICES_CONTENT;
  const action: CallToAction | undefined = detailed
    ? undefined
    : { label: "See all services", href: ROUTES.services };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-navy-2"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={content.eyebrow}
          heading={content.heading}
          description={content.description}
          headingId="services-heading"
          action={action}
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.number}>
              <Card className="h-full">
                <span className="font-mono text-sm font-medium text-gold">
                  {service.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-fog-bright">
                  {service.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-fog">
                  {service.description}
                </p>

                {detailed ? (
                  <ul className="mt-6 flex flex-col gap-3 border-t border-navy-2 pt-6">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 font-body text-sm text-fog"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-0.5 select-none font-mono text-gold"
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
