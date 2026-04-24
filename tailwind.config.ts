import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
      },
      colors: {
        brand: {
          blue: "#1d4ed8",
          dark: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
export default config;