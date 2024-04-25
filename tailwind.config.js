/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        principal: '#F59DC8',
        transparente: "#fff4",
        rosa: '#FF007D',
        input: '#FFE4E4'
      },
      fontFamily: {
        font: ['Katibeh', 'serif']
      }
    },
  },
  plugins: [],
}