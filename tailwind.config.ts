import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#001C47",
        "navy-deep": "#010F2B",
        "navy-soft": "#0B2652",
        gold: "#C89238",
        "gold-light": "#E3B562",
        ivory: "#F3EEE1",
        paper: "#FBF9F4",
        ink: "#1A1F2B",
        slate: {
          DEFAULT: "#5B6478",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        arch: "220px 220px 12px 12px",
      },
      boxShadow: {
        soft: "0 30px 60px -20px rgba(0,20,55,0.35)",
        badge: "0 20px 40px -12px rgba(0,20,55,0.4)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
