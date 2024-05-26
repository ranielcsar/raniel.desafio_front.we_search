/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "light-pink": "#f9f6fc",
        "light-green": "#dcf5f2",
        "green-emereald": "#03a28b",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}
