/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-inputbox-color": "#224957",
        "custom-button1": "#20DF7F",
        "header-color": "#14274A",
        "header-button": "#E0B973",
        'admin-background':'#0099cc'
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "4.052rem",
      },
    },
  },
  plugins: [],
};
