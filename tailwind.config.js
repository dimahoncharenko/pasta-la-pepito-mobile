// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./ignite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      enormous: "30px",
    },
    extend: {
      fontFamily: {
        interLight: "interLight",
        inter: "interRegular",
        interMedium: "interMedium",
        interBold: "interBold",
        alegreyaSC: "alegreyaSCRegular",
        alegreyaSCMedium: "alegreyaSCMedium",
      },

      colors: {
        primary: {
          lighter: "#F2F6F6",
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
          150: "#EBF1F1",
          200: "#D2D4D4",
          300: "#9FA3A4",
          400: "#6F7273",
        },
        white: "#FFFFFF",
        error: "#C03403",
      },
    },
  },
  plugins: [],
}
