/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helveticaLight:['helveticaLight','light'],
        helveticaRounded:['helveticaRounded','light'],
        helvetica:['helvetica','regular']
      },
      colors:{
        'projectThemeColor':'#7734E7',
        'desc':'#7F7979'
      }
    },
  },
  plugins: [],
}