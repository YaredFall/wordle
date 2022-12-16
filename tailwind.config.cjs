/** @type {import('tailwindcss').Config} */
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

        'text-primary': '#fbfef9',

        'bg-primary': '#171717',
        'bg-secondary': '#1f1f1f',
        'bg-tertiary': '#2f2f2f',

        'btn-primary': '#2f2f2f',
        'btn-hovered': '#4f4f4f',

        //    LIGHT VALUES    //

        'text-primary-light': '#171717',

        'bg-primary-light': '#BCEAD5',
        'bg-secondary-light': '#DEF5E5',
        'bg-tertiary-light': '#fbfef9',

        'btn-primary-light': '#DEF5E5',
        'btn-hovered-light': '#9ED5C5'
      },
    },
  },
  plugins: [],
}