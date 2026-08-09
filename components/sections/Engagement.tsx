import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES_PAGE } from "@/lib/content";

/**
 * Engagement: the flexible ways teams can work with Verico.
 */
export function Engagement(): React.JSX.Element {
  const { engagement } = SERVICES_PAGE;

  return (
    <section
      aria-labelledby="engagement-heading"
      className="border-b border-navy-2"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={engagement.eyebrow}
          heading={engagement.heading}
          description={engagement.description}
          headingId="engagement-heading"
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {engagement.items.map((item) => (
            <li
              key={item.title}
              className="border-l-2 border-gold bg-navy/40 py-2 pl-6"
            >
              <h3 className="font-display text-lg font-bold text-fog-bright">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-fog">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
