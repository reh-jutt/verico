import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_CONTENT, FAQ_ITEMS } from "@/lib/content";

/**
 * FAQ: accessible accordion built on native <details>/<summary>, so it
 * works with zero client-side JavaScript.
 */
export function Faq(): React.JSX.Element {
  return (
    <section aria-labelledby="faq-heading" className="border-b border-navy-2">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={FAQ_CONTENT.eyebrow}
          heading={FAQ_CONTENT.heading}
          description={FAQ_CONTENT.description}
          headingId="faq-heading"
        />

        <div className="mt-10 flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-navy-2 bg-navy/40 open:bg-navy/60"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-base font-semibold text-fog-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="select-none text-gold transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-6 font-body text-sm leading-relaxed text-fog">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
