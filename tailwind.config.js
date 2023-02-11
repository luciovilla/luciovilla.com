/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './layouts/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-inter)'],
        sans: ['var(--font-inter)']
      }
    },
    animation: {
      wave: 'pulse 1s infinite'
    },
    keyframes: {
      pulse: {
        '0%, 100%': { transform: 'scaleY(1)', 'transform-origin': '50% 50%' },
        '50%': { transform: 'scaleY(0.7)', 'transform-origin': '50% 50%' }
      }
    }
  },
  plugins: [
    plugin(
      function ({ addUtilities, theme, e }) {
        const values = theme('animationDelay')
        var utilities = Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`animation-delay-${key}`)}`]: { animationDelay: `${value}` }
          }
        })
        addUtilities(utilities)
      },
      {
        theme: {
          animationDelay: {
            none: '0s',
            150: '150ms',
            300: '300ms',
            450: '450ms',
            600: '600ms',
            750: '750ms',
            900: '900ms',
            1050: '1050ms',
            1200: '1200ms',
            1350: '1350ms'
          }
        }
      }
    )
  ]
}
