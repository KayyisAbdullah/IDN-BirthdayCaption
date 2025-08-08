/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nova: ['"Nova Cut"', 'cursive'],
        beth: ['"Beth Ellen"', 'cursive'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        'float-rotate': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(100vh) rotate(180deg)' },
          '100%': { transform: 'translateY(200vh) rotate(360deg)' },
        },
        'float-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(200vh)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        float: 'float 7s linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        'float-rotate': 'float-rotate 15s linear infinite',
        'float-down': 'float-down 15s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-in-down': 'fade-in-down 0.8s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
      },
    },
  },
  plugins: [],
};