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
        Blue: {
          100: "008ED2",
        },
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"], // Define as an object
      },
    },
  },
  plugins: [],
   
};
