/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f0f2f5",
        secondary: "#ff813f",
        tertiary: "#2222222",
        slate: {
          10: "#f1f3f4",
        },
        green: {
          50: "#30af58",
          90: "#292c27",
        },
        gray: {
          10: "#eeeeee",
          20: "#a2a2a2",
          30: "#7b7b7b",
          50: "#585858",
          90: "#141414",
        },
      },
      backgroundImage: {
        hero: "url('/src/assets/bgecom.png')",
        banneroffer: "url('/src/assets/banneroffer.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10x1": "1512px",
      },
      borderColor: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
