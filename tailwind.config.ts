import tailwinScrollbar from "tailwind-scrollbar";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const pointer =
  'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI6SURBVHgBnZRBaxNBGIYnu9uNSW1NlkgMVAl4Cyg5CAUPJlYFTyaX3CohePKUn5BcBA9CfkAvAf+B4sVLBC8eChv05ClKVaQIiUKjabOO77s7E8bUBpsXnrwzu9lvvvm+2bXFccWADRw1XlpWJpNZg+8ACV4kEomNVqtliSW0Am2mUik5HA5luVxmwEe5XC4pltBZ27a38/m8pHq9HoP54KI47ZbT6fQ52H1mRjE7jnFtK5vNrjJzhSuiui5cYA2Z3YN/HwwGYcBischgH8En8BLsKZ5w8VqtdiwoJ5bneeuO49zGeBdFD4OVSqVwu77vh1nS9VgF3SoUCq4ZiJObzAgcgK8sPtVsNqWWvka1221d011wgckI9cPJ5263K7k9NkDXbZH4Xzz3DRRVLcPDycmYBTe6KPV8kUR0Hm+AM0JFvA4+6DpRnU5nNq5UKn85A5jBUOdb8ITO7CrY4dZ0F+dX/5cbmd0Fq6zXb7CPI/F6NBq9bTQa4n/V7/dpI2QmZxfZWugKhm3eNLdI6S5q1/VkozB+BjZB3Dwe6+COZVlP4Ufs7CLV63UGeg8egksieiNmspPJZA6+DZ6DX/MZVqvVMDt1JA6w8GP4NV38ebnxePwy/IEK+FMVWHMIhmr8BnWuwj2hDqwzF+xwMpnsIeCr6XQ6DoJgIKIvhhuLxaZIjm/IEZgAH/ffwX+IqIknvvU8e+fBBlb38JALDxBwrLKTWGwf/gWMzcKfJP3pXjGuBcqlyjAwH/gDZjDKatJ5fJYAAAAASUVORK5CYII="), pointer;';

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        brand: "0.8rem",
        pill: "100vmax",
      },
      colors: {
        // neutral: {
        //   100: '#ffffff',
        //   900: '#000000',
        // },
        brand: {
          100: "#fafafa",
          200: "#858585",
          300: "#111517",
          400: "#202c36",
          500: "#2b3844",
        },
      },
      screens: {
        s: "20em", // => @media (min-width: 320px) { ... }
        xs: "30em", // => @media (min-width: 480px) { ... }
        sm: "36em", // => @media (min-width: 576px) { ... }
        sx: "40em", // => @media (min-width: 640px) { ... }
        md: "45em", // => @media (min-width: 720px) { ... }
        lg: "64em", // => @media (min-width: 1024px) { ... }
        xl: "80em", // => @media (min-width: 1280px) { ... }
        "2xl": "96em", // => @media (min-width: 1280px) { ... }
        "3xl": "112.5em", // => @media (min-width: 1800px) { ... }
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: ({ theme }) => ({
        header: "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
        card: "0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)",
        input: "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
        pill: "0px 0px 4px 1px rgba(0, 0, 0, 0.104931)",
        back: "0px 0px 7px rgba(0, 0, 0, 0.293139)",
        glass: `
        inset 0.25px 1px 0 0 ${theme("colors.rose.200 / 3%")},
        0px 0.3px 0.3px rgba(3, 2, 2, 0.02),
        0px 2.2px 2.5px -0.4px rgba(3, 2, 2, 0.02),
        0px 4.3px 4.8px -0.8px rgba(3, 2, 2, 0.02),
        0px 7.5px 8.4px -1.2px rgba(3, 2, 2, 0.02),
        0px 12.8px 14.4px -1.7px rgba(3, 2, 2, 0.02),
        0px 21px 23.6px -2.1px rgba(3, 2, 2, 0.02),
        0px 33.2px 37.4px -2.5px rgba(3, 2, 2, 0.02)`,
        "elevation-sm": `
        inset 0.25px 1px 1px 0 ${theme("colors.rose.200 / 1.5%")},
        0.3px 0.5px 0.7px rgba(3, 2, 2, 0.2),
        0.4px 0.8px 1px -1.2px rgba(3, 2, 2, 0.2),
        1px 2px 2.5px -2.5px rgba(3, 2, 2, 0.2);`,
        "elevation-md": `
        inset 0.25px 1px 1px 0 ${theme("colors.rose.200 / 3%")},
        0.3px 0.5px 0.7px rgba(3, 2, 2, 0.1),
        0.8px 1.6px 2px -0.8px rgba(3, 2, 2, 0.1),
        2.1px 4.1px 5.2px -1.7px rgba(3, 2, 2, 0.1),
        5px 10px 12.6px -2.5px rgba(3, 2, 2, 0.1)`,
      }),
      keyframes: ({ theme }) => ({
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    tailwinScrollbar({ nocompatible: true }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".icon": {
          fill: "currentColor",
        },
        ".full-w-bg": {
          boxShadow: "0 0 0 100vmax currentColor, 0 0 3.2rem currentColor",
          clipPath: "inset(0 -100vmax)",
        },
        ".h-container": {
          "--max-width": "128rem", //70rem
          "--container-padding": "2rem", //1rem
          width: "min(var(--max-width), 100% - (var(--container-padding) * 2))",
          marginInline: "auto",
        },
        ".grid-cols-auto": {
          "--min-column-size": "15rem",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(var(--min-column-size), 100%), 1fr))",
        },
      });
    }),
  ],
};

export default config;
