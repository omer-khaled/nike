/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'start-color':"#d5ab55",
        'bag-color':"#535353",
        "primary-color":"#ff6452"
      }
    },
  },
  plugins: [],
  
}