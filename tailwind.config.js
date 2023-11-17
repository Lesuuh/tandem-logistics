/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "#A9592C",
      // orange: "rgb(18, 44, 130)",
      green: "linear-gradient(to right, #FFA07A, #A9592C)",
      white : "#fff",
      gray : "#cfcfcf",
      greenish : "#0E8019"
    },
    extend: {},
  },
  plugins: [],
};
