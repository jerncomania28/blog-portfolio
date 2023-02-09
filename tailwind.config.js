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
        "custom-grey": "#F3F3F3",
      },
      boxShadow: {
        "3xl": "-30px -20px 0px #464646",
      },
      fontFamily: {
        "albert-sans": ["Albert Sans", "sans-serif"],
        alclonica: ["alclonica"],
        proxima: ['proxima'],
      },
    },
  },
  plugins: [],
};
