import { nextui } from "@nextui-org/theme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      xs: "0px",
      sm: "768px",
      md: "1024px",
      lg: "1366px",
      xl: "1920px",
    },
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#48c43c",
            secondary: "#192935",
            buttonbgcolor: "#34CABE",
            orange: "#FF812B",
          },
        },
        dark: {
          colors: {
            primary: "#48c43c",
            secondary: "#48c43c",
            orange: "#FF812B",
          },
        },
      },
    }),
  ],
};
