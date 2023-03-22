/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#101014',
        secondary: '#1B1A1D',
        colorText: '#B9B8B9',
        info: '#BBD8EC',
      },
    },
  },
  plugins: [],
};
