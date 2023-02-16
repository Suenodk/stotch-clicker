/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{svelte,js,ts}"],
  daisyui: {
    themes: [
      {
        stotchTheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#5c88c1",
        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
