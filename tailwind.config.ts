import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#d8e8ff",
          200: "#b8d6ff",
          300: "#8fbcff",
          400: "#5a98ff",
          500: "#2f73f6",
          600: "#1f5bd1",
          700: "#1b4aa8",
          800: "#1b3f87",
          900: "#1c376f"
        }
      },
      boxShadow: {
        soft: "0 6px 18px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
