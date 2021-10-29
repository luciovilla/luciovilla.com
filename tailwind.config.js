const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  theme: {
    fontFamily: {
      body: ['Inter', ...fontFamily.sans],
      sans: ['Inter', ...fontFamily.sans]
    },
    extend: {
      colors: {
        blue: '#01417b',
        yellow: '#ffa70a'
      }
    }
  }
}
