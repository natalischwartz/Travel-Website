/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html","./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // ========== MODO CLARO (default) ==========
         /*Color mode HSL(hue, saturation, lightness)*/
          "title-color": "hsl(220, 8%, 10%)",
          "text-color": "hsl(220, 8%, 40%)",
          "white-color": "hsl(0, 0%, 100%)",
          "black-color": "hsl(220, 8%, 6%)",
          "body-color": "hsl(220, 8%, 99%)",
          "container-color": "hsl(220, 8%, 96%)",
          "opacity-color-30": "hsla(0, 0%, 90%, .3)",
          "opacity-color-20": "hsla(0, 0%, 90%, .2)",

        // ========== MODO OSCURO ==========
        "dark-title-color": "hsl(220, 8%, 90%)",
          "dark-text-color": "hsl(220, 8%, 70%)",
          "dark-body-color": "hsl(220, 8%, 8%)",
          "dark-container-color": "hsl(220, 8%, 12%)",
          "dark-opacity-color-30": "hsla(0, 0%, 15%, .3)",
          "dark-opacity-color-20": "hsla(0, 0%, 15%, .2)",
      },
      fontFamily: {
        "body-font":"Montserrat, sans-serif",
        "second-font":"Dancing Script, cursive"
      },
      fontWeight:{
        "font-regular": 400,
        "font-medium": 500,
        "font-semi-bold": 600,
        "font-bold": 700
      },
      fontSize:{
          "biggest-font-size": "6rem",
          "big-font-size": "3rem",
          "h1-font-size": "2.25rem",
          "h2-font-size": "1.5rem",
          "h3-font-size": "1.25rem",
          "normal-font-size": "1rem",
          "small-font-size": ".875rem"
        }
    },
  },
  plugins: [],
}