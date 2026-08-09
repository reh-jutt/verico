import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080D18",
        navy: "#0F1830",
        "navy-2": "#16213D",
        steel: "#3C4A6B",
        fog: "#B7C0D4",
        "fog-bright": "#E7EBF3",
        gold: "#E8A94C",
        "gold-dim": "#C98D34",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        "line-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "caret-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        "line-in": "line-in 0.35s ease-out both",
        "caret-blink": "caret-blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
