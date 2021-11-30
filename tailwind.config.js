module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "Noto Sans KR": ["Noto Sans KR", "sans-serif"],
    },
    extend: {
      height: {
        xl: "700px",
      },
      animation: {
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
