/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "hsl(230, 35%, 7%)",
        navBg: "#151923",
        lightBlue: "rgb(208, 214, 249)",
        borderColor: "rgb(255, 255, 255, 0.6)",
        alphaWhite: "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "home-page-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-page-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-page-mobile": "url('/assets/home/background-home-mobile.jpg')",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlowCond: ["Barlow Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      letterSpacing: {
        linkSpace: "3px",
      },
    },
  },
  plugins: [],
};
