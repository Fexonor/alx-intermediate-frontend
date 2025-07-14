/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.html",
  ],
  safelist: [
    "bg-blue-200",
    "bg-blue-300",
    "bg-blue-400",
    "p-4",
    "grid",
    "grid-cols-3",
    "gap-4"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
