/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "2xl": "1535px",
      // => @media (max-width: 1535px) { ... }

      xl: "1279px",
      // => @media (max-width: 1279px) { ... }

      lg: "1137px",
      // => @media (max-width: 1023px) { ... }

      xmd: "920px",

      md: "767px",
      // => @media (max-width: 767px) { ... }

      sm: "639px",
      // => @media (max-width: 639px) { ... }
      xsm: "582px",
      xxsm: "448px",
    },
    extend: {},
  },
  plugins: [],
};
