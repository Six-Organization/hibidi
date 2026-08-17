import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // All HSL-based (iOS-15 safe, no oklch/color-mix)
        cream: "hsl(35, 60%, 97%)",
        blush: "hsl(8, 72%, 92%)",
        rust: "hsl(14, 62%, 48%)",
        terracotta: "hsl(14, 55%, 55%)",
        mocha: "hsl(20, 24%, 30%)",
        gold: "hsl(38, 82%, 60%)",
        petal: "hsl(340, 78%, 76%)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -20px hsla(20, 40%, 25%, 0.45)",
        glow: "0 0 0 6px hsla(38, 82%, 60%, 0.18)",
      },
      keyframes: {
        floatUp: {
          "0%": { transform: "translateY(0)", opacity: "0.9" },
          "100%": { transform: "translateY(-120vh)", opacity: "0" },
        },
        popIn: {
          "0%": { transform: "scale(0.6)", opacity: "0" },
          "60%": { transform: "scale(1.08)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        wiggle: {
          "0%,100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.95)", opacity: "0.7" },
          "70%": { transform: "scale(1.25)", opacity: "0" },
          "100%": { transform: "scale(1.25)", opacity: "0" },
        },
        bob: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        floatUp: "floatUp linear forwards",
        popIn: "popIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        wiggle: "wiggle 1.6s ease-in-out infinite",
        pulseRing: "pulseRing 2s ease-out infinite",
        bob: "bob 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
