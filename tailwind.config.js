/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#34313D",
        primaryGray: "#EFF1F7",
        primaryCyan: "hsl(180, 66%, 49%)",
        primaryDarkViolet: "hsl(257, 27%, 26%)",
        secondaryRed: "hsl(0, 87%, 67%)",
        secondaryCyan: "#78E3E3",
        neutralGray: "hsl(0 0 75%)",
        neutralGrayishViolet: "hsl(257, 7%, 63%)",
        neutralVeryDarkBlue: "hsl(255, 11%, 22%)",
        neutralVeryDarkViolet: "hsl(260, 8%, 14%)",
      }
    },
  },
  plugins: [],
}
