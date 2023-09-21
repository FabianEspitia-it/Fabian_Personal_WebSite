/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        'extension' : 'url("../img/Extension.png")',
        'htm': 'url("../img/hack_the_market.png")',
        'fabian': 'url("../img/fabian.png")'

      }
    },
  },
  plugins: [],
}