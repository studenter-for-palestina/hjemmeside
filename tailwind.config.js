/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '124': '31rem',
        '176':'44rem',
        '256': '64rem',
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#f9f7e9',             // background color
        second: '#2f6b25',              // main green color
        third: '#f44d1f',               // main orange color
      },
    },
  },
  plugins: [],
}

