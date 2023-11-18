/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily:{
        gothic:['russiangothic','"ms ui gothic"','nec_apc3','Tahoma'],
        pixel:['PixelNES', ...defaultTheme.fontFamily.mono],
        digital:['Digital', ...defaultTheme.fontFamily.mono],
        perfectDos:['perfectDos', ...defaultTheme.fontFamily.mono],
      },
      dropShadow:{
        'green': '0 0px 20px rgba(20, 220, 187, 0.35)',
      },
      animation: {
        slide: "slide 2.5s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(100%)", opacity: 0.1 },
          "15%": { transform: "translateY(0)", opacity: 1 },
          "30%": { transform: "translateY(0)", opacity: 1 },
          "45%": { transform: "translateY(-100%)", opacity: 1 },
          "100%": { transform: "translateY(-100%)", opacity: 0.1 },
        },
      },
    },
  },
  plugins: [],
};
