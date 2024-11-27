import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightCyan: {
          light: "#E5F0F0",
          DEFAULT: "#CFE4E4",
          dark: "#CBE2E2",
        },
        myrtleGreen: {
          light: "#4B9595",
          DEFAULT: "#418080",
          dark: "#3E7A7A",
        },
        darkCyan: {
          light: "#6AA0A0",
          DEFAULT: "#5D9292",
          dark: "#588989",
        },
        lihtBlue: {
          extralight: "#D9E8E8",
          light: "#A6C9C9",
          DEFAULT: "#97BFBF",
          dark: "#8DB9B9",
        },
        tuftsBlue: {
          light: "#2894E2",
          DEFAULT: "#1E8CD9",
          dark: "#1B7EC5",
        },
        auburn: {
          light: "#AF3140",
          DEFAULT: "#9E2C39",
          dark: "#8F2834",
        },
        redCrayola: {
          light: "#ED5A6B",
          DEFAULT: "#EA3E51",
          dark: "#E9354A",
        },
        grape: {
          light: "#953cb9",
          DEFAULT: "#8635A5",
          dark: "#7d329a",
        },
        charcoal: {
          light: "#394C56",
          DEFAULT: "#2F3E46",
          dark: "#293C3D",
        },
        lapisLazuli: {
          light: "#1B679D",
          DEFAULT: "#165683",
          dark: "#15507A",
        },
        gamboge: {
          light: "#F1A841",
          DEFAULT: "#EF9D2D",
          dark: "#EE961B",
        },
        mint: {
          light: "#8BD0AD",
          DEFAULT: "#74C69D",
          dark: "#6EC499",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2894E2",
          "base-100": "#FFFFFF", // Cor de fundo clara
          "base-200": "#F9FAFB", // Cor clara para componentes
          // Defina outras cores conforme necessário
        },
      },
      "light", // Tema claro padrão
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
