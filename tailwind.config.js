const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  theme: {
    fontFamily: {
      body: ['Inter', ...fontFamily.sans],
      sans: ['Inter', ...fontFamily.sans]
    }
  }
}
