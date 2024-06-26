import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "sm": "375px",
      "md": "640px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1440px",
    },
    extend: {
      gridTemplateAreas: {
        "wide": [
          "counter options delete",
        ],
        "slim": [
          "counter delete",
          "options options",
        ]
      }
    }
  },
  plugins: [
    require("@savvywombat/tailwindcss-grid-areas")
  ],
  variants: {
    gridTemplateAreas: ["responsive"],
  },
  darkMode: ["selector", "[data-theme='dark']"],
};
export default config;
