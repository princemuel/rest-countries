const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      ...defaultTheme.borderRadius,
      default: '0.8rem',
      pill: '100vmax',
    },

    fontFamily: {
      sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      inherit: 'inherit',
      neutral: {
        100: '#ffffff',
        900: '#000000',
      },
      primary: {
        100: '#fafafa',
        200: '#858585',
        300: '#111517',
        400: '#202c36',
        500: '#2b3844',
      },
    },
    screens: {
      s: '20em', // => @media (min-width: 320px) { ... }
      xs: '30em', // => @media (min-width: 480px) { ... }
      sm: '36em', // => @media (min-width: 576px) { ... }
      sx: '40em', // => @media (min-width: 640px) { ... }
      md: '45em', // => @media (min-width: 720px) { ... }
      lg: '64em', // => @media (min-width: 1024px) { ... }
      xl: '80em', // => @media (min-width: 1280px) { ... }
      xxl: '96em', // => @media (min-width: 1280px) { ... }
      xxxl: '112.5em', // => @media (min-width: 1800px) { ... }
    },

    extend: {
      boxShadow: {
        header: '0px 2px 4px rgba(0, 0, 0, 0.0562443)',
        card: '0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)',
        input: '0px 2px 9px rgba(0, 0, 0, 0.0532439)',
        pill: '0px 0px 4px 1px rgba(0, 0, 0, 0.104931)',
        back: '0px 0px 7px rgba(0, 0, 0, 0.293139)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.icon': {
          fill: 'currentColor',
        },
        '.w-full-shadow': {
          boxShadow: '0 0 0 100vmax currentColor, 0 0 2rem currentColor',
          clipPath: 'inset(0 -100vmax)',
        },
        '.h-container': {
          '--max-width': '128rem',
          '--container-padding': '2rem',

          width: 'min(var(--max-width), 100% - (var(--container-padding) * 2))',
          marginInline: 'auto',
        },
      });
    }),
  ],
};
