/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'], // Update with paths to your files
  theme: {
    extend: {
      colors: {
        primary: '#4263eb',
        secondary: '#63e6be',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        },
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
};
