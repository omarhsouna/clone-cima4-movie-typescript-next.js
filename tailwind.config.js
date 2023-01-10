/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3f255f",
        primaryDark: "#352046",
        bgDrawer: "#1b0f29",
        primaryBorder: "#312242",
        socialColor: "#e0e0ff",
        twitter: "#20a2f2",
        facebook: "#4267b2",
        subMenu: "#523867",
        numberCard: "#883997e3",
        playButton: "#ea3232",
        filterButton: "#b9c0ea",
        FilterButtonBg: "#3e4a92",
        selectedSwitch: "#51b962",
      },
      boxShadow: {
        slider: "inset 0 10px 0 #1c092f",
        playButton: "4px 4px 0 #902323",
        buttonPagination: "0 4px #170e1f",
      },
      backgroundImage: {
        footerCard: "linear-gradient(to top,#1c1125,#0000)",
        cardHover: "linear-gradient(to bottom,#8a276c,#0000)",
      },
    },
  },
  plugins: [],
};
