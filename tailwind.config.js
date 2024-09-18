/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container:{
        center:"true",
        padding:"2rem"
      },
      colors:{
        'custom-green': '#00ff04',
      },
    },
  },
  plugins: [],
}

