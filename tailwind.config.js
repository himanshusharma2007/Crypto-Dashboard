/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: 'rgb(137, 137, 148)',
        lightPurple:'#EEEEF4',
        darkPurple:'#5F00D9',
        lightGray:"#535D66"
      }
    },
  },
  plugins: [],
}
