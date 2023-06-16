/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'heebo': ['Heebo', 'sans-serif'],
    },
    colors: {
      red: '#c01924',
      white: '#fdfefb',
      lightgray: '#4d4d4d',
      gray: '#1e1e1e',
      black: '#111111',
    },
    extend: {},
  },
  plugins: [],
}

