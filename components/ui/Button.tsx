import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-body text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-60";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-dim active:bg-gold-dim",
  ghost:
    "border border-steel text-fog-bright hover:border-fog hover:text-fog-bright",
};

function classes(variant: Variant, className?: string): string {
  return [BASE_CLASSES, VARIANT_CLASSES[variant], className]
    .filter(Boolean)
    .join(" ");
}

type ButtonAsLinkProps = {
  variant?: Variant;
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type ButtonAsButtonProps = {
  variant?: Variant;
  href?: undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

/**
 * Renders an anchor (via next/link) when `href` is provided, otherwise a
 * native <button>. The `variant` prop selects the visual style.
 */
export function Button(props: ButtonProps): React.JSX.Element {
  const { variant = "primary", className, ...rest } = props;

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest as ButtonAsLinkProps;
    return (
      <Link
        href={href}
        className={classes(variant, className)}
        {...anchorProps}
      />
    );
  }

  const buttonProps = rest as ButtonAsButtonProps;
  return (
    <button
      className={classes(variant, className)}
      {...buttonProps}
    />
  );
}
