import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chango: ["Chango", "cursive"],
        mochiy: ["Mochiy Pop One", "sans-serif"],
        notosans: ["Noto Sans JP", "sans-serif"],
        yu: ["Yu Gothic", "sans-serif"],
      },
      colors: {
        grape: { DEFAULT: "#6A1B9A", sub: "#CE93D8", light: "#F3E5F5" },
        orange: { DEFAULT: "#FB8C00", sub: "#FFCC80", light: "#FFF3E0" },
        muscat: { DEFAULT: "#7CB342", sub: "#C5E1A5", light: "#F1F8E9" },
        cola: { DEFAULT: "#6D4C41", sub: "#BCAAA4", light: "#EFEBE9" },
        soda: { DEFAULT: "#0288D1", sub: "#81D4FA", light: "#E1F5FE" },
        pineapple: { DEFAULT: "#FDD835", sub: "#FFF59D", light: "#FFFDE7" },
      },
    },
  },
  safelist: [
    "bg-grape",
    "bg-orange",
    "bg-muscat",
    "bg-cola",
    "bg-soda",
    "bg-pineapple",
  ],
  plugins: [],
} satisfies Config;
