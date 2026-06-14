/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#533afd',
          deep: '#4434d4',
          press: '#2e2b8c',
          soft: '#665efd',
          subdued: '#b9b9f9',
        },
        ink: {
          DEFAULT: '#0d253d',
          secondary: '#273951',
          mute: '#64748d',
        },
        canvas: {
          DEFAULT: '#ffffff',
          soft: '#f6f9fc',
          cream: '#f5e9d4',
        },
        navy: {
          DEFAULT: '#1c1e54',
          deep: '#141436',
        },
        hairline: {
          DEFAULT: '#e3e8ee',
          input: '#a8c3de',
        },
        ruby: '#ea2261',
        mesh: {
          cream: '#f5e9d4',
          orange: '#f6a23b',
          lavender: '#a78bfa',
          indigo: '#533afd',
          ruby: '#ea2261',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        display: '-0.04em',
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0,55,112,0.08)',
        lift: '0 8px 24px rgba(0,55,112,0.08), 0 2px 6px rgba(0,55,112,0.04)',
        glow: '0 10px 40px rgba(83,58,253,0.18)',
      },
      keyframes: {
        'mesh-drift': {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(2%,-2%,0) scale(1.08)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'mesh-drift': 'mesh-drift 16s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
