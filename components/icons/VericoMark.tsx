import type { SVGProps } from "react";

/**
 * Verico logomark — a checkmark inside a shield, echoing "verified QA".
 * Uses `currentColor` so callers control colour via Tailwind text tokens.
 */
export function VericoMark({
  title = "Verico",
  ...props
}: SVGProps<SVGSVGElement> & { title?: string }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      {...props}
    >
      <path
        d="M16 2.5 27 6.2v8.1c0 6.9-4.5 12.2-11 15.2-6.5-3-11-8.3-11-15.2V6.2L16 2.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="m11 15.8 3.6 3.7L21 12.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
