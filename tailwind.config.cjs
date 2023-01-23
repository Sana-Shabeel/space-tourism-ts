/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-page-desktop":
          "url('./public/assets/home/background-home-desktop.jpg')",
        "home-page-tablet":
          "url('./public/assets/home/background-home-tablet.jpg')",
        "home-page-mobile":
          "url('./public/assets/home/background-home-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
