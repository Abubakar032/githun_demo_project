/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary": "#111111",
        "span":  "#00F0FF", 
        "secondary" :"#3A3A3A4D",
        "span2" : "linear-gradient(90deg, #FF1CF7 0%, #00F0FF 100%)"
      },
      
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'clash-grotesk': ['Clash Grotesk', 'sans-serif']
      }
    },
  },
  plugins: [],
};

