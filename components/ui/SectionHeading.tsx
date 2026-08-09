import Link from "next/link";
import type { CallToAction } from "@/types";

export interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  description?: string;
  /** Horizontal alignment of the block. Defaults to left. */
  align?: "left" | "center";
  /** Optional id for the heading element (used for aria-labelledby). */
  headingId?: string;
  /** Optional inline link rendered beneath the description. */
  action?: CallToAction;
}

/**
 * Reusable eyebrow + heading + description block shared by every section.
 */
export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  headingId,
  action,
}: SectionHeadingProps): React.JSX.Element {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-gold">
        {eyebrow}
      </span>
      <h2
        id={headingId}
        className="font-display text-3xl font-bold leading-tight text-fog-bright sm:text-4xl"
      >
        {heading}
      </h2>
      {description ? (
        <p className="font-body text-base leading-relaxed text-fog">
          {description}
        </p>
      ) : null}
      {action ? (
        <Link
          href={action.href}
          className="group mt-1 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold transition-colors hover:text-gold-dim focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
          {action.label}
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      ) : null}
    </div>
  );
}
