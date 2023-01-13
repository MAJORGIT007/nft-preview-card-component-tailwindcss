/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'softblue': '#8BACD9',
      'cyan': '#00FFF8',
      'maindarkblue': '#0D192C',
      'carddarkblue': '#15263F',
      'linedarkblue': '#2E405A'
    },
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'nft': "url('./assets/image-equilibrium.jpg')"
      }
    },
  },
  plugins: [],
}
