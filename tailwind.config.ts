/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px'
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        roboto: ['var(---font-roboto)'],
        'source-sans-pro': ['var(--font-source-sans-pro)'],
      },
    },
  },
  plugins: [],
}