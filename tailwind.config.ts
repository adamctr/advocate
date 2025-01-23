import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  flyonui: {
    themes: [
      {
        mytheme: {
          
        }
      }
    ]
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "black",
        secondary: "gold",
        text: "#d8eaeb",
        accent: "#0b4f4a",
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers'),
    require("flyonui"),
    require("flyonui/plugin")
  ],

} satisfies Config;

