/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      width: {
        '73': '73%',
        '30': '30%',
        '41': '40rem'
      },
      height: {
        '50': '32rem',
        '60': '36rem'
      },
      margin: {
        '33': '9rem'
      },
      fontSize: {
        'text-custom-sm': '0.50rem', // Example custom smaller size
      },
    },
  },
  plugins: [],
}