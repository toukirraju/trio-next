
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   DEFAULT: "var(--primary)",
        //   50: "var(--primary-50)",
        //   100: "var(--primary-100)",
        //   200: "var(--primary-200)",
        //   300: "var(--primary-300)",
        //   400: "var(--primary-400)",
        //   500: "var(--primary-500)",
        //   600: "var(--primary-600)",
        //   700: "var(--primary-700)",
        //   800: "var(--primary-800)",
        //   900: "var(--primary-900)",
        //   light: "var(--primary-light)",
        //   dark: "var(--primary-dark)",
        // },
        // secondary: {
        //   DEFAULT: "var(--secondary)",
        //   50: "var(--secondary-50)",
        //   100: "var(--secondary-100)",
        //   200: "var(--secondary-200)",
        //   300: "var(--secondary-300)",
        //   400: "var(--secondary-400)",
        //   500: "var(--secondary-500)",
        //   600: "var(--secondary-600)",
        //   700: "var(--secondary-700)",
        //   800: "var(--secondary-800)",
        //   900: "var(--secondary-900)",
        //   light: "var(--secondary-light)",
        //   dark: "var(--secondary-dark)",
        // },
        primary: {
          DEFAULT: 'rgb(var(--primary-500) / <alpha-value>)',
          25: 'rgb(var(--primary-25) / <alpha-value>)',
          50: 'rgb(var(--primary-50) / <alpha-value>)',
          100: 'rgb(var(--primary-100) / <alpha-value>)',
          200: 'rgb(var(--primary-200) / <alpha-value>)',
          300: 'rgb(var(--primary-300) / <alpha-value>)',
          400: 'rgb(var(--primary-400) / <alpha-value>)',
          500: 'rgb(var(--primary-500) / <alpha-value>)',
          600: 'rgb(var(--primary-600) / <alpha-value>)',
          700: 'rgb(var(--primary-700) / <alpha-value>)',
          800: 'rgb(var(--primary-800) / <alpha-value>)',
          900: 'rgb(var(--primary-900) / <alpha-value>)',
          950: 'rgb(var(--primary-950) / <alpha-value>)',
          light: 'rgb(var(--primary-light) / <alpha-value>)',
          dark: 'rgb(var(--primary-dark) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary-500) / <alpha-value>)',
          25: 'rgb(var(--secondary-25) / <alpha-value>)',
          50: 'rgb(var(--secondary-50) / <alpha-value>)',
          100: 'rgb(var(--secondary-100) / <alpha-value>)',
          200: 'rgb(var(--secondary-200) / <alpha-value>)',
          300: 'rgb(var(--secondary-300) / <alpha-value>)',
          400: 'rgb(var(--secondary-400) / <alpha-value>)',
          500: 'rgb(var(--secondary-500) / <alpha-value>)',
          600: 'rgb(var(--secondary-600) / <alpha-value>)',
          700: 'rgb(var(--secondary-700) / <alpha-value>)',
          800: 'rgb(var(--secondary-800) / <alpha-value>)',
          900: 'rgb(var(--secondary-900) / <alpha-value>)',
          950: 'rgb(var(--secondary-950) / <alpha-value>)',
          light: 'rgb(var(--secondary-light) / <alpha-value>)',
          dark: 'rgb(var(--secondary-dark) / <alpha-value>)',
        },
      },


      keyframes: {
        'pulse-left-to-right': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'pulse-left-to-right': 'pulse-left-to-right 3s ease-in-out infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(var(--tw-gradient-stops))",
        'pulse-gradient': 'linear-gradient(90deg, rgba(200, 200, 200, 0.1) 25%, rgba(200, 200, 200, 0.2) 50%, rgba(200, 200, 200, 0.1) 75%)',
      },
    },
  },
  plugins: [],
};
export default config;
