/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1F3B', // Marineblau
          light: '#2A305B',
          dark: '#10142B',
        },
        secondary: {
          DEFAULT: '#2ABFBC', // Türkis
          light: '#3AD0CD',
          dark: '#1A9F9C',
        },
        white: '#FFFFFF',
        gold: '#D4AF37', // Gold für Premium-Elemente
      },
    },
  },
  plugins: [],
};