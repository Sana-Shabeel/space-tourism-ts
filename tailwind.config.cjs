/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
