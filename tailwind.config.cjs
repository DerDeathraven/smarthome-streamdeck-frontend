/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        txt: {
          dark: "var(--textHeader)",
          light: "var(--textBody)",
        },
      },
    },
  },
  plugins: [],
};
