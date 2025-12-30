/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/newPages/**/*.{js,jsx}",
    "./src/index.jsx",
    "./src/App.jsx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#e5231b",
        "background-light": "#F0EEE9",
        "background-dark": "#1a1616",
        "graphite": "#181111",
        "graphite-light": "#2A2424",
        "surface": "#ffffff",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "full": "9999px"
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(24, 17, 17, 0.05)',
        'hover': '0 10px 25px -5px rgba(24, 17, 17, 0.1)',
      }
    },
  },
  plugins: [],
}

