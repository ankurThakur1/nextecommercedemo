/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orangeHex: "#ff5c03",
        yelloHex: "#ff8800",
        greenHex: " #39a97c",
        blueTextHex: "#007185"
      },
      flex: {
        "1": "1 0 32%"
      }
    },
  },
  plugins: [],
};
