import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Base surface used across sections. Presentational only — callers supply
 * the content and any layout-specific overrides via className.
 */
export function Card({ children, className }: CardProps): React.JSX.Element {
  return (
    <div
      className={[
        "rounded-xl border border-navy-2 bg-navy/60 p-6 transition-colors duration-200 sm:p-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
