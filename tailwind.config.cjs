const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        //    DARK VALUES    //

        'text-primary': colors.zinc[50],

        'bg-primary': colors.zinc[900],
        'bg-secondary': '#b7b7b7',
        'bg-tertiary': '#2c2c30',
        
        'btn-primary': colors.neutral[900],
        'btn-hovered': colors.neutral[700],

        //    LIGHT VALUES    //

        'text-primary-light': colors.zinc[900],

        'bg-primary-light': colors.white,
        'bg-secondary-light': '#707070',
        'bg-tertiary-light': colors.white,
        
        'btn-primary-light': colors.white,
        'btn-hovered-light': colors.zinc[200],
        
        //    ACCENTS    //
        'accent-primary': '#eac808',
        'accent-secondary': colors.stone[200],
        'accent-tertiary': colors.zinc[500]
        
      },
      screens: {
        'tall': { 'raw': '(min-height: 800px)' },
        'lg': '960px'
      },
      animation: {
        'grow-in': 'grow-in 750ms 250ms cubic-bezier(0.55, 0.06, 0.63, 1.21) forwards',
        'shrink-down': 'shrink-down 500ms 250ms cubic-bezier(0.6, -0.37, 0.92, 0.64) forwards',
        'fade-in-delayed': 'fade-in 750ms 750ms cubic-bezier(0.6, -0.37, 0.92, 0.64) forwards',
        'vibrate-once': 'vibrate 500ms ease forwards',
        'rotate-in': 'rotate-in 150ms ease forwards',
        'rotate-out': 'rotate-out 150ms ease forwards'
      }
    },
  },
  plugins: [],
}