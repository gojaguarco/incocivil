import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#363942',
        dark: '#151515',
        accent1: '#C95701',
        accent2: '#F8DB7D',
        light: '#F1F4FE',
        'light-dark': '#E0E3EC',
        'logo-red': '#9F1F00',
        'logo-yellow': '#FCC172',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
