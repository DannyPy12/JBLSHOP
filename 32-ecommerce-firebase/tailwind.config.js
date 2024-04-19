module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      colors: {
        azul: "#FF7F00", 
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus'],
      textColor: ['responsive', 'hover', 'focus'],
    },
  },
};

