/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",              // 👈 THIS IS IMPORTANT
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}