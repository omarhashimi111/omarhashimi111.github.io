/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        sec_background: 'var(--sec_background)',
        text: 'var(--text)',
        sec_text: 'var(--sec_text)',
      },
      backgroundImage: {
        main: "var(--gradient-main)", 
        hbg: "var(--h-background)",
        sec: "var(--sec_gradient)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
