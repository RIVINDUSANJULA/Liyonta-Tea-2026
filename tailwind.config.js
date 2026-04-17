/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      colors: {
        cream: "#F5F0E8",
        charcoal: "#2C2A22",
        gold: "#C8A84B",
        goldHover: "#D4B865",
        olive: "#8B7B5A",
        cardBg: "#FFFFFF",
        beige: "#EDE7D8",
        lightBeige: "#F9F7F2",
        paleBeige: "#FAF7F2",
        footerBg: "#1E1C15",
      },
    },
  },
  plugins: [],
}