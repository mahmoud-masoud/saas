/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b1c37',
      },
      backgroundImage: {
        hero: "url('/public/images/backgrounds/hero.webp')",
      },

      animation: {
        infinite: 'infinite 6s linear infinite',
      },
      keyframes: {
        infinite: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
