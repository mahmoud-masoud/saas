/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b1c37',
      },
      backgroundImage: {
        hero: "url('/images/backgrounds/hero.webp')",
      },

      animation: {
        infinite: 'infinite 6s linear infinite',
        avatar: 'avatar 1s ease forwards',
        leftAvatarImage: 'leftAvatarImage .5s ease forwards',
        rightAvatarImage: 'rightAvatarImage .5s ease forwards',
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

        leftAvatarImage: {
          from: {
            transform: 'translateX(-50%) translateY(-50%) scale(.9)',
          },
          to: {
            transform: 'translateX(-25%) translateY(0) scale(1)',
          },
        },
        rightAvatarImage: {
          from: {
            transform: 'translateX(50%) translateY(50%) scale(.9)',
          },
          to: {
            transform: 'translateX(25%) translateY(0) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
