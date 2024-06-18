/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}", // This should cover all HTML and JS files in the project
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '240px',
        'xs': '320px',
      },
    },
  },
  plugins: [],
}
