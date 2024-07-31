
// // tailwind.config.js
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as necessary
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      "1g": { max: "1440px" },
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        amber: { 500: "#ffc107" },
        b: "#1b1b1b",
        b2: "#2b2b2b",
        black: { 600: "#656d76", 900: "#000000", "900_cc": "#000000cc" },
        bloe: "#0000004c",
        blue_gray: {
          50: "#f1f1f1",
          100: "#d9d9d9",
          900: "#30303d",
          "900_01": "#2c2c2c",
          "900_02": "#2c2b2b",
        },
        gray: {
          100: "#f5f5f5",
          300: "#ебебе6",
          900: "#lelele",
          "100_01": "#f2f2f2",
          "300_01": "#e6e2e2",
          "50_11": "#fffbfb11",
          "50_7f": "#fffbfb7f",
          "900_00": "#1b1b1b00",
          "900_01": "#17181e",
          "900_2d": "#1b1b1b2d",
          "900_88": "#1b1b1b88",
          "900_8c": "#1b1b1b8c",
        },
        indigo: { 200: "#9badca" },
        1: "#fffbfb59",
        o: "#ff9505",
        orange: { "500_cc": "#ff9505cc", "500_db": "#ff9505db" },
        t: "#fffbfba5",
        w: { 0: "#fffbfb", 1: "#fffbfb33" },
        white: { a700: "#ffffff", a700_7f: "#ffffff7f", a700_cc: "#ffffffcc" },
        gray_shadow: "#00000029",
      },
      boxShadow: { xs: "0 13px 5px #00000029" },
      fontFamily: {
        ptserif: "PT Serif",
        inter: "Inter",
        montserrat: "Montserrat",
        wellfleet: "Wellfleet",
        poppins: "Poppins",
        raleway: "Raleway",
        opensans: "Open Sans",
        luxuriousroman: "Luxurious Roman",
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, #1b1b1b,#1b1b1b88,#1b1b1b2d, #1b1b1b00)",
        gradient1: "linear-gradient(180deg, #1b1b1b00,#1b1b1b)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // if you're using Tailwind Forms
  ],
};
