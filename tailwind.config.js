/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "#A9592C",
      // orange : "#f77f00",
      // orange: "rgb(18, 44, 130)",
      green: "linear-gradient(to right, #FFA07A, #A9592C)",
      white : "#fff",
      gray : "#cfcfcf",
      greenish : "#0E8019",
      black: "#000",
      grey : "#f4f4f4"
    },
    extend: {},
  },
  plugins: [],
};
