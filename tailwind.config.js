/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
      },
      boxShadow: {
        'neumorphism-light': '8px 8px 16px #d0d0d0, -8px -8px 16px #ffffff',
        'neumorphism-dark': '8px 8px 16px #0f0f0f, -8px -8px 16px #292929',
      },
      fontFamily: {
        'mono': ['Inconsolata', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}