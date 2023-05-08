/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.815rem",
      "7xl": "4.768rem",
    },
    borderRadius: {
      none: "0",
      sm: "3px",
      DEFAULT: "6px",
      lg: "12px",
      full: "9999px",
    },
    colors: {
      darkGreen: "#12471e",
      lightBeige: "#f9f4e8",
      lightGreen: "#84b85c",
      yellowAccent: "#e8ff8e",
      orangeAccent: "#ff8c00",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.2xl") },
        h2: { fontSize: theme("fontSize.xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
