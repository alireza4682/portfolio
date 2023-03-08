/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#453C67",
        blue: "#364F6B",
        red: "#FC5185",
        yellow: "#FFFF00",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(to right, #6d67e4, #2f81ef, #0095f0, #00a5e8, #00b3dd, #13bfd6, #3ecacc, #63d3c1, #82dfb7, #a5e9ac, #cbf1a4, #f2f7a1)",

        "gradient-rainblue":
          "linear-gradient(to right, #6d67e4, #2f81ef, #0095f0, #00a5e8, #00b3dd, #18add3, #24a6c9, #2ca0bf, #3087b0, #3a6d9c, #435483, #453c67)",
      }),
      fontFamily: {
        caudex: ["caudex", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
