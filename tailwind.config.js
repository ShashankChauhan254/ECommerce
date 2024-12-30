import DarkMode from './src/Components/Navbar/darkMode.jsx';

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': '#4263eb',
        'secondary': '#63e6be',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      },
    },
  },
  DarkMode: "selector",
  plugins: [],
}

