/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#040d0a',
          900: '#081c15',
          800: '#1b4332',
          700: '#2d6a4f',
          600: '#347a5a',
        },
        nature: {
          600: '#40916c',
          500: '#52b788',
          400: '#74c69d',
          300: '#95d5b2',
          200: '#b7e4c7',
          100: '#d8f3dc',
          50: '#f0fdf4',
        },
        warm: {
          50: '#fcfbf7',
          100: '#f8f6f0',
          200: '#f3efe6',
          300: '#e8e2d5',
          400: '#d2c8b4',
          500: '#9c927f',
          800: '#3c3831',
          900: '#1e1c18',
        },
        gold: {
          300: '#f3e8b1',
          400: '#e5c158',
          500: '#d4af37',
          600: '#c59b27',
          700: '#997316',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

