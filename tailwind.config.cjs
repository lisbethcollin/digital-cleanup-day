/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      black: {
        100: "#020617",
      },

      white: {
        100: "#FFFFFF",
      },

      blush: {
        100: "#FFAFCD",
        80: "#FFBFD7",
        60: "#FFCFE1",
        40: "#FFDFEB",
      },
      yolk: {
        100: "#FFA200",
        80: "#FFB533",
        60: "#FFC766",
        40: "#FFDA99",
      },
      diner: {
        100: "#FF4930",
        80: "#FF6D59",
        60: "#FF9283",
        40: "#FFB6AC",
      },
      lagoon: {
        100: "#205E96",
        80: "#4D7EAB",
        60: "#799EC0",
        40: "#A6BFD5",
      },
      ceramic: {
        100: "#F6E6D5",
        80: "#F8EBDD",
        60: "#FAF0E6",
        40: "#FBF5EE",
      },
      clover: {
        100: "#827C4C",
        80: "#9B9670",
        60: "#B4B094",
        40: "#CDCBB7",
      },
      rose: {
        100: "#F27984",
        80: "#F5949D",
        60: "#F7AFB5",
        40: "#FAC9CE",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
};
