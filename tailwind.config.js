/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          'dark-green': '#06202B',
          'light-green': '#00D77F',
          'light-yellow': '#AEFC49',
          'purple': '#9C8BE7',
        },
        ink: {
          950: '#03141A',
          900: '#06202B',
          800: '#0B2C38',
          700: '#103845',
          600: '#1A4A58',
          500: '#2A6072',
          400: '#4A7E8E',
          300: '#7BA5B3',
          200: '#B5D2DB',
          100: '#E0EDEF',
          50: '#F2F7F8',
        },
        cream: '#F5F7F4',
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 4.75rem)', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'grow-width': 'growWidth 1s ease-out forwards',
        'flame-flicker': 'flameFlicker 4s ease-in-out infinite alternate',
        'draw-line': 'drawLine 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        growWidth: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--target-width, 100%)' },
        },
        flameFlicker: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '0.9' },
          '50%': { transform: 'scale(1.02) rotate(1deg)', opacity: '1' },
          '100%': { transform: 'scale(0.98) rotate(-1deg)', opacity: '0.85' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
};
