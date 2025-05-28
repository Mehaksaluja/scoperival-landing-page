import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true, // ✅ Center the container horizontally
      padding: "1rem", // ✅ Add horizontal padding
    },
    extend: {
      // you can add custom colors, fonts, etc. here
    },
  },
  plugins: [],
};

export default config;
