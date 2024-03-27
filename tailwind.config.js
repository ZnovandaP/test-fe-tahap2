/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      lg: '900px',
      xl: '1150px',
    },
    extend: {},
  },
  plugins: [],
}

