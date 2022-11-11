/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        mygold: "#c5a47e",
      },
      letterSpacing: {
        custom: "0.32em",
      },
    },
  },
};
