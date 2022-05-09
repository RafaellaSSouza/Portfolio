module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cor1: '#18184e',
        cor2: '#232752',
        branco: 'rgb(255 255 255)',
        cor3: '#55cba9',
        cor5: '#A9A9A9'
      },
      keyframes: {
        float: {
          '0%': { transform: 'translatey(0px)' },
          '50%': { transform: 'translatey(-30px)' },
          '100%': { transform: 'translatey(0px)' }
        }
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      },
      
  },
    variants: {
      extend: {

      },
    },
    plugins: [],
  }
}
