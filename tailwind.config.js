/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: '#192231',
        customBlue: '#0000ff',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}

