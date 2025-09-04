import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        royalred: '#BE2130',
        deepmaroon: '#682D2E',
        antiquegold: '#B18E57',
        accentgold: '#EFD27A',
        cream: '#F8F3E6',
        teal: '#0E7A6F',
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
} satisfies Config;
