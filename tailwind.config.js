/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        industrial: {
          blue: '#0070f3',
          dark: '#0f172a',
          slate: '#1e293b',
          gray: '#64748b',
          surface: '#f8fafc',
          'surface-dark': '#f1f5f9',
        },
        brand: {
          primary: '#0070f3',
          secondary: '#0f172a',
          accent: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
