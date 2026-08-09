import { SectionHeading } from "@/components/ui/SectionHeading";
import { MISSION_VISION } from "@/lib/content";

/**
 * Mission & Vision: two accented statements shown on the About page.
 */
export function MissionVision(): React.JSX.Element {
  const blocks = [MISSION_VISION.mission, MISSION_VISION.vision];

  return (
    <section
      aria-labelledby="mission-heading"
      className="border-b border-navy-2"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow={MISSION_VISION.eyebrow}
          heading={MISSION_VISION.heading}
          headingId="mission-heading"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {blocks.map((block) => (
            <div
              key={block.label}
              className="rounded-xl border border-navy-2 bg-navy/40 p-8 border-l-2 border-l-gold"
            >
              <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold">
                {block.label}
              </span>
              <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-fog-bright">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
