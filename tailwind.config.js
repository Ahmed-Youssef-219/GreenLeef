/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/hero_image.png')",
      },
      fontFamily: {
        pacifico: ['var(--font-pacifico)'],
        lato: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
}
