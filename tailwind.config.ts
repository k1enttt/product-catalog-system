import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        "2xl": "2rem",
        DEFAULT: "1rem",
        lg: "2rem",
        md: "2rem",
        sm: "1rem",
        xl: "2rem",
      },
      screens: {
        "2xl": "86rem",
        lg: "64rem",
        md: "48rem",
        sm: "40rem",
        xl: "80rem",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0D0D0D",
        secondary: "#979797",
        background_primary: "#EFF2F6",
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF",
        yellow: "#FFFF00",
        cyan: "#00FFFF",
        magenta: "#FF00FF",
        orange: "#FFA500",
        purple: "#800080",
        brown: "#A52A2A",
        pink: "#FFC0CB",
      },
      textColor: {
        primary: "#0D0D0D",
        secondary: "#979797",
      },
      fontSize: {
        h1: "72px",
        h2: "56px",
        h3: "36px",
        h4: "22px",
        para: "18px",
      },
      lineHeight: {
        h1: "80px",
        h2: "62px",
        h3: "62px",
        h4: "30px",
        para: "26px",
      },
    },
  },
  plugins: [],
} satisfies Config;
