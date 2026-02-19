/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E7E7FF",
        secondary: "#8892B0",
        skyBlue: "#4cc9f0",
        dim: "#2C3148",
      },
      fontFamily: {
        orbiton: ['"Orbitron"', "sans-serif"],
        manrope: ['"Manrope"', "sans-serif"],
        grotesk: ['"Space Grotesk"', "sans-serif"],
      },
      backgroundImage: {
        "planet-card-bg": "url('./src/assets/imgs/planet-card-bg.png')",
        "rectangle-card-bg": "url('./src/assets/imgs/rectangle.svg')",
      },
    },
  },
  plugins: [],
};