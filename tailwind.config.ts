import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        First: "#FFFFFF",
        Second: "#34495E",
        Third: "#212529",

        Fourth: "#",
        Fifth: "#3FA2F6",
        Sixth: "#0F00FF",
        Seventh: "#2A2438",    
               
      },

    },
  },
  plugins: [],
};
export default config;
