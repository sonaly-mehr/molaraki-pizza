/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#26C0EA",
        secondary: "#0B1517",
        grey: "#F1F1F1"
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        opensans: ["var(--font-opensans)"],
      },
    },
  },
  plugins: [],
});
