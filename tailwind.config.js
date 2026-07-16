export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0a0f1d',
        surface: '#111a2e',
      },
      boxShadow: {
        neon: '0 0 40px rgba(62, 232, 184, 0.16), 0 0 70px rgba(99, 91, 255, 0.12)',
      },
      keyframes: {
        pulseRing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.45' },
          '50%': { transform: 'scale(1.14)', opacity: '0.12' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
