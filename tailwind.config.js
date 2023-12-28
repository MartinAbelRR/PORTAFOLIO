/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blanco" :"#EAF2E3",
        "celeste": "#61E8E1",
        "rojo": "#F25757",
        "amarillo": "#F2E863",
        "amarillo-oscuro": "#F2CD60"
      },
      fontFamily: {
        'roboto': "'Roboto', sans-serif"
      }
    },
  },
  plugins: [],
}

