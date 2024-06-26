/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        patina: {
          50: "#f5f8f7",
          100: "#ddeae5",
          200: "#bbd4cb",
          300: "#91b7ab",
          400: "#689689",
          500: "#507c71",
          600: "#3e635a",
          700: "#345149",
          800: "#2d423e",
          900: "#283934",
          950: "#141f1d",
        },
        grayolive: {
          50: "#f7f7f5",
          100: "#ecebe8",
          200: "#d9d7cf",
          300: "#c1beb0",
          400: "#a49e8d",
          500: "#958d7a",
          600: "#887f6e",
          700: "#72695c",
          800: "#5e574e",
          900: "#4d4741",
          950: "#292521",
        },
        cruise: {
          50: "#effaf6",
          100: "#d8f3e8",
          200: "#b2e6d4",
          300: "#82d3bc",
          400: "#4eb99e",
          500: "#2c9d85",
          600: "#1d7e6b",
          700: "#176558",
          800: "#155047",
          900: "#12423a",
          950: "#092521",
        },
      },
    },
  },
  plugins: [],
};
