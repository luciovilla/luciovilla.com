module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      0: '0',
      '1/4': '25vh',
      '1/2': '50vh',
      '3/4': '75vh',
      80: '80vh',
      full: '100vh',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
