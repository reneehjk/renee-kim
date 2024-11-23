/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        blue: "#0077FF",
      },
      fontFamily: {
        sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}