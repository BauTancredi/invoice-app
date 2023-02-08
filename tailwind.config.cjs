/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "hsla(252, 100%, 83%, 1)",
          300: "hsla(252, 100%, 73%, 1)",
          400: "hsla(252, 94%, 67%, 1)",
        },
        secondary: {
          400: "hsla(231, 20%, 27%, 1)",
        },
        light: {
          100: "hsla(240, 27%, 98%, 1)",
        },
      },
    },
  },
  plugins: [],
};
