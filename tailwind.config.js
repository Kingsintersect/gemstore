/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./*.html", 
    "./ecommerce/*.html", 
    "./assets/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        readex: ['Readex'],
        readex: ['Roboto'],
      },
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        primary: {
          50: '#fbe9e6',
          100: '#ffcbba',
          200: '#feaa8e',
          300: '#fe8861',
          400: '#fd6e3e',
          500: '#fd571a',
          600: '#f25116',
          700: '#e44911',
          800: '#d6420c',
          900: '#bd3503',
        },
        secondary: {
          50: '#e0f4fc',
          100: '#b2e2f7',
          200: '#80d0f2',
          300: '#50bdeb',
          400: '#2cb0e9',
          500: '#08a3e5',
          600: '#0EA0D5',
          700: '#0c8cc3',
          800: '#0b7baf',
          900: '#005c8e',
        },
        accent: {
          50: '#ffe9ed',
          100: '#ffc9cf',
          200: '#f59294',
          300: '#ed666a',
          400: '#f73b45',
          500: '#fd1a26',
          600: '#e82b44',
          700: '#d50c3c',
          800: '#c81734',
          900: '#ba0028',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailgrids/plugin"),
    require('flowbite/plugin')({
      charts: true,
  }),
  ],
}
