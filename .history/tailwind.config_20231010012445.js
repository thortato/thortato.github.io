/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
    colors:{
      "amber" : "#FFD500"
    },
    fontFamily: {
      // sans: ['"Montserrat"', 'sans-serif'],
      sans: ['"Inter"', "sans-serif"],
    },
  },
  plugins: [],
}

