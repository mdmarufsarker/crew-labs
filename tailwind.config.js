/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'light': ["Satoshi-Light"],
      'regular': ["Satoshi-Regular"],
      'medium': ["Satoshi-Medium"],
      'bold': ["Satoshi-Bold"],
      'black': ["Satoshi-Black"],
    },
    extend: {},
  },
  plugins: [],
}