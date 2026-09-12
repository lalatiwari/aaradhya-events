/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D1F2B', // Deep Burgundy
          dark: '#4A111B',
          light: '#8B2C3B'
        },
        gold: {
          DEFAULT: '#C69A45', // Antique Gold
          light: '#E2C27A',
          dark: '#A37D32'
        },
        cream: {
          DEFAULT: '#FAF7F0', // Off White / Cream
          dark: '#F0EAD6'
        },
        charcoal: '#252525'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}