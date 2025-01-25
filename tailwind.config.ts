import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "black",
        secondary: "gold",
        text: "#ebf1f2", //
        accent: "#146F74",
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers'),

  ],

} satisfies Config;

