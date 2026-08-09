import { ABOUT_CONTENT, WHO_WE_HELP } from "@/lib/content";

/**
 * About: the "why we started" story alongside the "who we work with" list.
 */
export function AboutStory(): React.JSX.Element {
  return (
    <section
      aria-labelledby="story-heading"
      className="border-b border-navy-2"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:py-24">
        <div className="lg:col-span-3">
          <h2
            id="story-heading"
            className="font-display text-2xl font-bold leading-tight text-fog-bright sm:text-3xl"
          >
            {ABOUT_CONTENT.story.heading}
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {ABOUT_CONTENT.story.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="font-body text-base leading-relaxed text-fog"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-xl border border-navy-2 bg-navy/40 p-6 sm:p-8">
            <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold">
              {WHO_WE_HELP.eyebrow}
            </span>
            <h3 className="mt-4 font-display text-lg font-bold text-fog-bright">
              {WHO_WE_HELP.heading}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {WHO_WE_HELP.items.map((item) => (
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
          </div>
        </aside>
      </div>
    </section>
  );
}
