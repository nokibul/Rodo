/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
      'sm': '320px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      },
      colors: {
        background: '#2160CA',
        item: '#C5E1E5',
        "btn-bg": '#1D1BA3'
      },
    },
  },
  plugins: [],
}

