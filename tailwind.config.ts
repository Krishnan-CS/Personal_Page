import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Backgrounds ── */
        bg: {
          base:      "#111714", // main background
          secondary: "#1A221D", // secondary background
          card:      "#202922", // card background
          elevated:  "#28332B", // elevated surface
        },
        /* ── Borders ── */
        border: {
          DEFAULT: "#354238",
          accent:  "rgba(176,141,87,0.18)", // bronze-tinted border
          subtle:  "rgba(176,141,87,0.08)", // very subtle
        },
        /* ── Accents ── */
        emerald: {
          // primary accent — muted emerald
          50:  "#eef5ef",
          100: "#d6ead8",
          200: "#aed4b2",
          300: "#7fba85",
          400: "#52a05a",
          500: "#3d8a45", // base CTA / active
          600: "#2e6e35",
          700: "#225429",
          800: "#173b1c",
          900: "#0d2310",
        },
        bronze: {
          // secondary accent — muted gold/bronze
          50:  "#fdf8ee",
          100: "#f7ecce",
          200: "#edd79d",
          300: "#e0bc6a",
          400: "#d4a143", // hover / dividers / achievements
          500: "#b08057",
          600: "#8d6040",
          700: "#6a4530",
          800: "#472e1f",
          900: "#241710",
        },
        /* ── Text ── */
        text: {
          primary:   "#E8ECE8",
          secondary: "#B7C0B7",
          muted:     "#7E8A80",
        },
      },
      fontFamily: {
        sans: ["Inter", "IBM Plex Sans", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      letterSpacing: {
        "section": "0.12em",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "card":    "0 2px 16px rgba(0,0,0,0.35)",
        "overlay": "0 8px 40px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
