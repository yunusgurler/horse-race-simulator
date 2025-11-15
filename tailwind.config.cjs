/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // düz kullanım: bg-primary, text-primary
        primary: "#ffe100",
        secondary: "#a855f7",

        // istersen scale de yapabilirsin:
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          500: "#22d3ee",
          600: "#06b6d4",
          700: "#0891b2",
        },
      },
    },
  },
  plugins: [],
};
