const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['"Poppins"'],
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    extend: {
      colors: {
        primary: colors.rose,
        secondary: colors.indigo
      },
      fontSize: {
        '2xs': '0.6rem',
      },
      letterSpacing: {
        'extra-wide': '.23rem'
      },
      backgroundImage: {
        'downloadable-section': 'url(/bg-1.webp)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
