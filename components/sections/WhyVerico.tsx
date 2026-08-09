import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CONTENT, WHY_ITEMS } from "@/lib/content";

/**
 * WhyVerico: three WhyItem entries, each with a left gold border accent.
 */
export function WhyVerico(): React.JSX.Element {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="border-b border-navy-2"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={WHY_CONTENT.eyebrow}
          heading={WHY_CONTENT.heading}
          description={WHY_CONTENT.description}
          headingId="why-heading"
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {WHY_ITEMS.map((item) => (
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
