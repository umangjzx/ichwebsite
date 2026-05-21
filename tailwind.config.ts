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
          DEFAULT: '#E11D2E', // Premium Red Accent
          dark: '#B91C1C',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Brighter blue accent for dark theme
          dark: '#2563EB',
        },
        surface: '#111827', // gray-900 (cards, panels)
        dark: '#030712', // gray-950 (main background)
        muted: '#9CA3AF', // gray-400 (text)
        border: '#1F2937', // gray-800 (borders)
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
