/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flo: {
          navy: "#0a1128",
          dark: "#070d1e",
          card: "#111c38",
          cardBorder: "#1f2f58",
          emerald: "#10b981",
          emeraldDark: "#059669",
          emeraldLight: "#34d399",
          cyan: "#06b6d4",
          gold: "#f59e0b",
          goldLight: "#fcd34d",
          blue: "#2563eb",
          blueLight: "#38bdf8",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.4)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.4)',
      }
    },
  },
  plugins: [],
};
