const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //    DARK VALUES    //

        'text-primary': colors.zinc["50"],

        'bg-primary': colors.zinc["900"],
        'bg-secondary': colors.zinc["700"],
        'bg-tertiary': colors.zinc["800"],

        'btn-primary': colors.zinc["900"],
        'btn-hovered': colors.zinc["700"],

        //    LIGHT VALUES    //

        'text-primary-light': colors.zinc["900"],

        'bg-primary-light': colors.white,
        'bg-secondary-light': colors.red["300"],
        'bg-tertiary-light': colors.white,

        'btn-primary-light': colors.zinc["200"],
        'btn-hovered-light': colors.zinc["300"]
      },
      screens: {
        'tall': { 'raw': '(min-height: 800px)' }
      },
      animation: {
        'grow-in': 'grow-in 750ms 250ms cubic-bezier(0.55, 0.06, 0.63, 1.21) forwards',
        'shrink-down': 'shrink-down 500ms 250ms cubic-bezier(0.6, -0.37, 0.92, 0.64) forwards',
        'fade-in-delayed': 'fade-in 750ms 750ms cubic-bezier(0.6, -0.37, 0.92, 0.64) forwards',
        'vibrate': 'vibrate 250ms ease forwards'
      }
    },
  },
  plugins: [],
}