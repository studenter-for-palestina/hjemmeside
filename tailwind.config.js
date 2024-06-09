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
        main_bg: '#f9f7e9',               // background color
        main_green: '#2f6b25',            // main green color
        hover_green: '#295c20',           // dark green color
        main_orange: '#f44d1f',           // main orange color
        main_gray: '#292D32',             // dark grey color

      },
    },
  },
  plugins: [],
}

