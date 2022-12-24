/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#464646",
        "custom-grey": "#7f7e7e",
      },
      boxShadow :{
        '3xl': '-30px -20px 0px #464646'
      }
    },
  },
  plugins: [],
};
