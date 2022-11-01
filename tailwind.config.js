/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  safelist: ['bg-white', 'text-neutral-900', 'bg-neutral-900', 'text-white'],
  theme: {
    extend: {}
  },
  plugins: []
};
