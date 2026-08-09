import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_CONTENT, VALUES } from "@/lib/content";

/**
 * Values: the principles Verico works by, as a responsive card grid.
 */
export function Values(): React.JSX.Element {
  return (
    <section
      aria-labelledby="values-heading"
      className="border-b border-navy-2"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={ABOUT_CONTENT.values.eyebrow}
          heading={ABOUT_CONTENT.values.heading}
          description={ABOUT_CONTENT.values.description}
          headingId="values-heading"
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {VALUES.map((value) => (
            <li key={value.title}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-bold text-fog-bright">
                  {value.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-fog">
                  {value.description}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
