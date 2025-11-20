/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-orange': '#F25D27', 
        'brand-blue': '#1D4ED8',   
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}