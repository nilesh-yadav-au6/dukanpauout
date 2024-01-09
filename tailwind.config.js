/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "black-100": "#FFFFFF",
      "black-12": "#1A181E",
      "black-30": "#4D4D4D",
      "black-50": "#808080",
      "black-95": "#F2F2F2",
      "black-90": "#E6E6E6",
      "black-98": "#FAFAFA",
      "primary-blue": "#146EB4",
      "hover-blue": "#0E4F82",
      "black-60": "#999999",
      "black-85": "#D9D9D9",
      "secondary-green": "#17B31B",
      "secondary-navbar": "#1E2640",
      "back-color": "#353C53",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      galano: ["GalanoGrotesqueAltDEMO", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
