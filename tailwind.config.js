const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xxs: '.7rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
    },
    colors: {
      dark: {
        light: '#343438',
        lighter: '#1A1A1D',
        DEFAULT: '#141417'
      },
      neonGreen: {
        DEFAULT: '#00E979'
      },
      funGray: {
        DEFAULT: '#66666A'
      },
      funBlue: {
        light: '#515166',
        lighter: '#48485f',
        DEFAULT: '#2C2C46'
      },
      fieldBlue: {
        DEFAULT: '#40405A'
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      green: colors.green,
      red: colors.rose,
      yellow: colors.amber
    },
    fontFamily: {
      sans: ['"Epilogue"', 'sans-serif']
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
