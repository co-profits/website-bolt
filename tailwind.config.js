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
        /* COP-VIS-01: Semantic surface colors */
        surface: {
          paper: '#F5F7F4',
          stone: '#E8ECE9',
          white: '#FFFFFF',
          forest: '#06202B',
          'forest-deep': '#03141A',
        },
        semantic: {
          'ink-strong': '#0B2C38',
          'ink-body': '#2A3D47',
          'ink-muted': '#5A707C',
          'ink-on-dark': '#E0EDEF',
          'ink-on-dark-muted': '#7BA5B3',
          'rule': '#C8D2CE',
          'rule-on-dark': '#1A4A58',
          'accent-green': '#00D77F',
          'accent-yellow': '#AEFC49',
        },
      },
      fontFamily: {
        display: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        /* COP-VIS-06: Calibrated hierarchy */
        'display-xl': ['clamp(2.25rem, 6vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg': ['clamp(1.75rem, 5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['clamp(1.625rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h2': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.5' }],
        'body': ['1rem', { lineHeight: '1.5' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.5' }],
      },
      maxWidth: {
        '8xl': '88rem',
        'measure': '42rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
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
          '0%': { opacity: '0', transform: 'translateY(16px)' },
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
