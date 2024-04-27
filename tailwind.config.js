/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b1c37',
      },
      backgroundImage: {
        hero: "url('/Images/Backgrounds/hero.webp')",
      },

      dropShadow: {
        eclipse: '0 35px 35px #fff',
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
        avatar: {
          from: {
            transform: 'translateY(200px) scale(.7)',
          },

          100: {
            transform: 'translateY(0)  scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
