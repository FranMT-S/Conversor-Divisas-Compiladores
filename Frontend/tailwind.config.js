/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "primary_dark": "#09122F",
        "secundary_dark": "#2C2E45",
        "gray": "#2D3246",
        "deep_coral": "#65CDC4",
      },
    },
  },
  plugins: [],
}

