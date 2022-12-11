/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: 'hsla(252, 90%, 67%, 1)',
          500: 'hsla(252, 100%, 67%, 1)'
        },
        secondary: {
          400: 'hsla(231, 20%, 27%, 1)'
        }
      }
    }
  },
  plugins: []
};
