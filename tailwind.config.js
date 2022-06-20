/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px',
        'hero-breakpoint': '900px',
        xs: '480px',
      },
      fontSize: {
        paragraph: '18px',
      },
      colors: {
        neutral: {
          white: 'hsl(0, 0%, 98%)',
          gray: 'hsl(0, 0%, 41%)',
          black: 'hsl(0, 0%, 8%)',
        },
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
