/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading':['"Quicksand"', 'sans-serif'],
        'text':['"Lexend Deca"', 'sans-serif']
      }
    },
  },
  plugins: [],
}