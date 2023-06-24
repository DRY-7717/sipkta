/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/index.html"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
