/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#3d52a0',
      light: '#7091E6',
      secondary: '#8697c4',
      grey: '#adbbda',
      calm: '#ede8f5',
    },
  },
  plugins: [],
};
