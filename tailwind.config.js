/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      keyframes: {
        bouncy: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },

      animation: {
        bouncy: "bouncy 1s",
      },
      colors: {
        mygold: "#c5a47e",
        mygray: "#323232",
      },
      letterSpacing: {
        custom: "0.32em",
      },
      container: {
        center: true,
        screens: {
          mobile: "600px",
          tablet: "900px",
          desktop: "1140px",
        },
      },
    },
  },
};
