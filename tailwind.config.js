import PreviousMap from 'postcss/lib/previous-map';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ["Poppins", "sans-serif"],
        'inter': ["Inter", "sans-serif"]
      },
      colors:{
        'primary':'#19297C',
        'secondary':'#33A1FD',
        'tertiary':'#E8F1F2'
      }
    },
  },
  plugins: [],
}

