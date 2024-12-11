export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        md: "768px",
        lg: "992px",
        xl: "1200px",
        // xxl: "1350px",
      },
    },
    extend: {
      fontFamily: {
        // gemunu: ['"Gemunu Libre", sans-serif'],
      },
      colors: {
        "t-text": "#0d213f",
        "t-bg": "#fafcff",
        "t-melon": "#FFD369",
        "t-grey": "#DDDDDD",
        "t-white": "#F7F7F7",
      },
      height: {
        120: '450px', 
      },
      borderWidth: {
        10: '10px', 
      },
    },
  },
  plugins: [],
};
