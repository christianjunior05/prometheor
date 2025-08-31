/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
        blue:"#0F0D59",
        jauneOr:"#E6BF58",
        blanc:"#FFFFFF",
        rose:"#E6BF58"

       },
       fontFamily:{
        lato:"lato: ['Lato', 'sans-serif']",
        dmserif: ['"DM Serif Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif']
       },

       backgroundImage:{
                header: "url('/header.jpg')",
                footer:"url('/footer.png')"

       }
    },
  },
  plugins: [],
}
