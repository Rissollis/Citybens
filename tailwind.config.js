/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue, js, ts, jsx, tsx}"
    ],
    theme: {
      extend: {
        colors: {
            cityYellow: "#e5f71b",
            cityBlue: "#2a42fd",
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif']
        }
      },
    },
    plugins: [],
  }

