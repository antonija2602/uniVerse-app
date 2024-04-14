/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      //   boxShadow: {
      //     custom: "0 35px 60px -15px rgba(255, 0, 0, 0.3)",
      //   },
    },
  },
  plugins: [],
};
