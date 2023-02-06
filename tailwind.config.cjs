/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        home: "min-content 1fr",
      },
      fontSize: {
        fs900: "9.375rem",
        fs800: "6.25rem",
        fs750: "5rem",
        fs700: "3.5rem",
        fs650: "2.5rem",
        fs600: "2rem",
        fs500: "1.75rem",
        fs450: "1.5rem",
        fs400: "1.125rem",
        fs300: "1rem",
        fs200: "0.875rem",
      },
      colors: {
        dark: "hsl(230, 35%, 7%)",
        navBg: "#151923",
        lightBlue: "rgb(208, 214, 249)",
        line: "rgb(255, 255, 255, 0.3)",
        alphaWhite: "rgba(255, 255, 255, 0.1)",
      },
      backgroundImage: {
        "home-page-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "home-page-tablet": "url('/assets/home/background-home-tablet.jpg')",
        "home-page-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('/assets/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
        "technology-tablet":
          "url('/assets/technology/background-technology-tablet.jpg')",
        "technology-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlowCond: ["Barlow Condensed", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      letterSpacing: {
        "3px": "3.38px",
        "2xl": "0.17em",
        h1space: "0.2em",
      },
      boxShadow: {
        "3xl": "0px 0px 0px 55px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
