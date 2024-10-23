import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "spring-wood": {
          "50": "#f7f6f1",
          "100": "#f0eee4",
          "200": "#dfdbc9",
          "300": "#cbc3a6",
          "400": "#b6a881",
          "500": "#a69369",
          "600": "#99825d",
          "700": "#806b4e",
          "800": "#695843",
          "900": "#554839",
          "950": "#2d241d",
        },
        "cream-can": {
          "50": "#fefaec",
          "100": "#fdf0c8",
          "200": "#fadf8d",
          "300": "#f8cd5e",
          "400": "#f5b42a",
          "500": "#ef9211",
          "600": "#d46e0b",
          "700": "#b04d0d",
          "800": "#8f3b11",
          "900": "#753212",
          "950": "#431805",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;
