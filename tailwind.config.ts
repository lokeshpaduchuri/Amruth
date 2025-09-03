import type { Config } from 'tailwindcss';

export default <Config>{
  content: ['./src/**/*.{html,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        royal: '#BE2130',
        maroon: '#682D2E',
        gold: '#B18E57',
        'gold-accent': '#EFD27A',
        cream: '#F8F3E6',
        teal: '#0E7A6F'
      }
    }
  }
};
