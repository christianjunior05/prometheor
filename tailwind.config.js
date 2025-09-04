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
        rose:"#E6BF58",
        gris:"#C4C4C4"
       },
       fontFamily:{
        lato:"lato: ['Lato', 'sans-serif']",
        dmserif: ['"DM Serif Display"', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
       },

       backgroundImage:{
                homepage:"url('/homepage.png')",
                repere:"url('/repere.jpg')",
                section3:"url('/section3.png')",
                section3:"url('/section3.png')",
                section5Repere:"url('/section5.png')",
                footer:"url('/footer.png')",
                exploration:"url('/exploration.jpg')",
                explorsection4:"url('/explorsection4.png')",
                explorsection5:"url('/explorsection5.png')",
                trajectoire:"url('/trajectoire.png')",
                trajectoireSection3:"url('/trajectoireSection3.png')",
                trajectoireSection5:"url('/trajectoireSection5.png')",
                
   

       }
    },
  },
  plugins: [],
}
