/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        fs900: "9.375rem",
        fs800: "6.25rem",
        fs700: "3.5rem",
        fs600: "2rem",
        fs500: "1.75rem",
        fs400: "1.125rem",
        fs300: "1rem",
        fs200: "0.875rem",
      },
      height: {
        "1px": "1px",
      },
      colors: {
        dark: "hsl(230, 35%, 7%)",
        navBg: "#151923",
        lightBlue: "rgb(208, 214, 249)",
        bottomBorder: "rgb(255, 255, 255, 0.6)",
        line: "rgb(255, 255, 255, 0.3)",
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
