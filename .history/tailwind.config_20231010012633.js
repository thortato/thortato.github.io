/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./index.html",
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
  // plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

