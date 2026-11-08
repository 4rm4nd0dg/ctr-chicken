import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#E8202A',
          'red-dark': '#B7121B',
          'red-deep': '#8A0A11',
          orange: '#F7941D',
          'orange-dark': '#D67409',
          black: '#0B0B0B',
          dark: '#181818',
          gray: '#262626',
          'gray-light': '#F3F4F6',
          cream: '#FFF7EC',
          'cream-subtle': '#FFFDF9',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Anton', 'Impact', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        'touch': '48px',
      },
      minHeight: {
        'touch': '48px',
      },
      minWidth: {
        'touch': '48px',
      },
      boxShadow: {
        'crispy': '0 8px 24px -4px rgba(232, 32, 42, 0.18)',
        'floating': '0 12px 32px -6px rgba(11, 11, 11, 0.16)',
        'glow-red': '0 0 20px rgba(232, 32, 42, 0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        'pulse-subtle': 'pulseSubtle 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;

