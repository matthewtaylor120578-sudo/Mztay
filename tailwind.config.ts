import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        pc: {
          pink: "#FF4D68",
          purple: "#8F438D",
          teal: "#00B7A9",
          darkDeep: "#353535",
          darkMid: "#595959",
          offWhite: "#EDEDED",
        },
      },
      fontFamily: {
        sans: ["Gilroy", "Avenir", "Arial", "sans-serif"],
        heading: ["Gilroy", "Avenir", "Arial", "sans-serif"],
      },
      backgroundImage: {
        "pc-gradient":
          "linear-gradient(135deg, #FF4D68 0%, #8F438D 50%, #00B7A9 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
