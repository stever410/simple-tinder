module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      '500px': '500px'
    },
    extend: {
      colors: {
        "electric-pink": '#FD297B',
        "fiery-rose": "#FF5864",
        "pastel-red": "#FF655B"
      },
      fontFamily: {
        custom: ['Montserrat', 'sans-serif']
      },
      inset: {
        '22': '5.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
