/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '960px',
      'xl': '1200px',
      '2xl': '1440px',
      '3xl': '1920px',
    }
  },
  plugins: []
}
