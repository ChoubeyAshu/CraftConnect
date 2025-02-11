/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelWhite: "#F8F8F8",
        pastelGreen: "#000000",
        orangeMain: "#FF8F07",
        greenMain: "#abd373",
      },
    },
  },
  plugins: [],
}
