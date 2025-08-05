/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 8px rgba(59,130,246,0.2)', // subtle + thin glow
        glowHover: '0 0 25px rgba(59,130,246,0.5)', // stronger glow on hover

      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 6px 2px rgba(59,130,246,0.1)' },
          '50%': { boxShadow: '0 0 10px 4px rgba(59,130,246,0.2)' },
        },
        pulseGlowHover: {
          '0%, 100%': { boxShadow: '0 0 20px 5px rgba(59,130,246,0.2)' },
          '50%': { boxShadow: '0 0 30px 10px rgba(59,130,246,0.5)' },
        },
        reverseSpin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        "pulseGlow": "pulseGlow 2s ease-in-out infinite",
        pulseGlowHover: "pulseGlowHover 2s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "spin-slower": "spin 12s linear infinite",
        "spin-medium": "spin 12s linear infinite",
        "reverse-spin-slow": "reverseSpin 12s linear infinite",
        "reverse-spin-slower": "reverseSpin 12s linear infinite",
        "reverse-spin-medium": "reverseSpin 12s linear infinite",
      },
    },
  },
  plugins: [],
};
