/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        goTop: {
          '0%': { transform: 'translateY(200px)' },
          '100%': { transform: 'translateY(0)' }
        },
        goVisible: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        goTop: 'goTop 0.2s',
        goVisible: 'goVisible 0.3s'
      }
    },
  },
  plugins: [],
}
