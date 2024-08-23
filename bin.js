#!/usr/bin/env node

import { promises as fs } from "fs";
import path from "path";

const newTailwindConfigTS = `import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/twr-theme/**/*.{js,ts,jsx,tsx,mdx}", // Include twr-theme
  ],
  darkMode: "class",
  theme: {
    extend: {
     colors: {
        primary: {
          DEFAULT: "var(--primary)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
`;

const newTailwindConfigJS = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/twr-theme/**/*.{js,ts,jsx,tsx,mdx}", // Include twr-theme
  ],
  darkMode: "class",
  theme: {
    extend: {
     colors: {
        primary: {
          DEFAULT: "var(--primary)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
      },
       backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient": "conic-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
`;

const cwd = process.cwd();
const filePath = path.join(cwd, "tailwind.config.js");
const filePathTS = path.join(cwd, "tailwind.config.ts");

async function isTypeScriptProject() {
  const tsConfigPath = path.join(cwd, "tsconfig.json");
  try {
    await fs.access(tsConfigPath);
    return true;
  } catch {
    return false;
  }
}

async function updateOrCreateTailwindConfig() {
  try {
    const jsExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);
    const tsExists = await fs
      .access(filePathTS)
      .then(() => true)
      .catch(() => false);
    const isTS = await isTypeScriptProject();

    if (jsExists) {
      await fs.writeFile(filePath, newTailwindConfigJS, "utf8");
      console.log("Existing tailwind.config.js has been updated.");
    } else if (tsExists) {
      await fs.writeFile(filePathTS, newTailwindConfigTS, "utf8");
      console.log("Existing tailwind.config.ts has been updated.");
    } else {
      // Create new file based on project type
      if (isTS) {
        await fs.writeFile(filePathTS, newTailwindConfigTS, "utf8");
        console.log("New tailwind.config.ts has been created.");
      } else {
        await fs.writeFile(filePath, newTailwindConfigJS, "utf8");
        console.log("New tailwind.config.js has been created.");
      }
    }
  } catch (err) {
    console.error("Error updating or creating Tailwind config:", err);
  }
}

updateOrCreateTailwindConfig();
