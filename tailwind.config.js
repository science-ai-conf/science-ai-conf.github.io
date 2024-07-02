/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-pink': '#FF6EC7',
        'neon-blue': '#00FFFF',
        'neon-green': '#39FF14',
        'neon-yellow': '#FFFF00',
        'neon-orange': '#FF9933',
      },
    },
  },
  plugins: [],
}
