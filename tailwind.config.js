// tailwind.config.js

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./ignite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#0C99A2",
          DEFAULT: "#047585",
          dark: "#035C68",
        },
        secondary: {
          100: "#FBFBFB",
          200: "#D2D4D4",
          300: "#9FA3A4",
          400: "#6F7273",
        },
        gray: {
          100: "#FBFBFB",
          200: "#D2D4D4",
          300: "#9FA3A4",
          400: "#6F7273",
        },
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}
