/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
const defaultColors = require("tailwindcss/colors");

module.exports = withMT({
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        theme: "0.5rem",
      },
      colors: {
        ...defaultColors,
        blue: {
          50: "#E2F0FD",
          100: "#C6E1FB",
          200: "#8DC4F7",
          300: "#54A6F2",
          400: "#1B88EE",
          500: "#0E69BE",
          600: "#0B5498",
          700: "#083F72",
          800: "#062A4C",
          900: "#031526",
          950: "#010A13",
        },
        green: {
          50: "#EAF7E9",
          100: "#D9F0D6",
          200: "#B3E1AD",
          300: "#8AD081",
          400: "#64C158",
          500: "#49A43D",
          600: "#3A8230",
          700: "#2B6124",
          800: "#1E4319",
          900: "#0F210C",
          950: "#070F06",
        },
        red: {
          50: "#FBE6E4",
          100: "#F7C9C5",
          200: "#EE938B",
          300: "#E76255",
          400: "#DB2F1F",
          500: "#A12217",
          600: "#811C12",
          700: "#62150E",
          800: "#3E0D09",
          900: "#1F0704",
          950: "#120403",
        },
        yellow: {
          50: "#FCF7EE",
          100: "#F9EEDC",
          200: "#F2DCB5",
          300: "#ECCB93",
          400: "#E5B96C",
          500: "#DFA749",
          600: "#C88B23",
          700: "#986A1B",
          800: "#644612",
          900: "#342409",
          950: "#1A1205",
        },
        gray: {
          50: "#F6F6F9",
          100: "#F0F1F5",
          200: "#E0E2EB",
          300: "#CED1DE",
          400: "#BFC3D4",
          500: "#AFB4CA",
          600: "#8189AC",
          700: "#596287",
          800: "#3D435C",
          900: "#1E212E",
          950: "#0E1015",
        },
      },
    },
  },
  plugins: [],
});
