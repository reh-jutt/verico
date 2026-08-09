"use client";

import { useEffect, useState } from "react";
import {
  TERMINAL_COMMAND,
  TERMINAL_LINES,
  TERMINAL_SUMMARY,
} from "@/lib/content";

/** Milliseconds between each staggered line reveal. */
const STEP_MS = 500;

/** Total reveal steps: one per result line, plus the summary line. */
const TOTAL_STEPS = TERMINAL_LINES.length + 1;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Simulates `$ verico scan ./staging` with staggered line reveals.
 * When the user prefers reduced motion, every line renders instantly
 * with no animation.
 */
export function TerminalPanel(): React.JSX.Element {
  // Start with everything hidden; an effect reveals lines after mount so
  // SSR output and the reduced-motion path stay deterministic.
  const [revealed, setRevealed] = useState<number>(0);
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setRevealed(TOTAL_STEPS);
      return;
    }

    setAnimate(true);
    let step = 0;
    const timer = window.setInterval(() => {
      step += 1;
      setRevealed(step);
      if (step >= TOTAL_STEPS) {
        window.clearInterval(timer);
      }
    }, STEP_MS);

    return () => window.clearInterval(timer);
  }, []);

  const summaryVisible = revealed >= TOTAL_STEPS;

  return (
    <div
      className="w-full overflow-hidden rounded-xl border border-navy-2 bg-ink/80 font-mono text-sm shadow-2xl shadow-ink/50"
      aria-label="Example Verico QA scan output"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-navy-2 bg-navy/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-steel" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-steel" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-steel" aria-hidden="true" />
        <span className="ml-2 text-xs text-fog">verico — staging</span>
      </div>

      {/* Scan output */}
      <div className="space-y-2 px-4 py-5 leading-relaxed sm:px-6">
        <p className="text-fog-bright">
          <span className="text-gold">$</span> {TERMINAL_COMMAND}
        </p>

        <ul className="space-y-1.5">
          {TERMINAL_LINES.map((line, index) => {
            const isVisible = revealed > index;
            const isFlagged = line.status === "flagged";
            return (
              <li
                key={line.label}
                className={[
                  isVisible ? "opacity-100" : "opacity-0",
                  animate && isVisible ? "animate-line-in" : "",
                  isFlagged ? "text-gold" : "text-fog-bright",
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={
                  animate ? { animationDelay: `${index * STEP_MS}ms` } : undefined
                }
              >
                <span aria-hidden="true">{isFlagged ? "⚑" : "✓"}</span>{" "}
                {line.label}{" "}
                <span className="text-fog">
                  ... {isFlagged ? "flagged" : "passed"}
                </span>
              </li>
            );
          })}
        </ul>

        <p
          className={[
            "border-t border-navy-2 pt-3 text-fog",
            summaryVisible ? "opacity-100" : "opacity-0",
            animate && summaryVisible ? "animate-line-in" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {TERMINAL_SUMMARY}
          {!summaryVisible && animate ? (
            <span
              className="ml-1 inline-block h-4 w-2 animate-caret-blink bg-gold align-middle"
              aria-hidden="true"
            />
          ) : null}
        </p>
      </div>
    </div>
  );
}
