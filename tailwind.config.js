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
        professor: {
          blue: "#003DA5",
          yellow: "#FFB81C",
          gray: "#5A5A5A",
          lightgray: "#F0F0F0",
        },
      },
    },
  },
  plugins: [],
};
