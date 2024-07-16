/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto Mono', 'monospace'],
        'ubuntu-bold': ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
