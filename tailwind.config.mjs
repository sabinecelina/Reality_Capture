import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // UI, navigation, meta text
        sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Muted rose: pink, but grown-up. 700 is the default accent (AA on white).
        brand: {
          50: '#fdf4f7',
          100: '#fbe8ef',
          200: '#f6d0df',
          300: '#eeadc6',
          400: '#e283a8',
          500: '#cf5b88',
          600: '#b2416e',
          700: '#923358',
          800: '#782c4a',
          900: '#5f273f',
          950: '#3a1324',
          DEFAULT: '#923358',
        },
        // Warm neutrals with a faint rose undertone instead of cold blue-grey.
        gray: {
          50: '#fbf9f9',
          100: '#f5f1f2',
          200: '#e9e3e5',
          300: '#d6cdd0',
          400: '#a99ea2',
          500: '#7e7277',
          600: '#615659',
          700: '#4a4044',
          800: '#2e272a',
          900: '#1f1a1c',
          950: '#151113',
        },
        paper: {
          DEFAULT: '#fffbfc',
          dark: '#161214',
        },
      },
      maxWidth: {
        measure: '68ch',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray.800'),
            '--tw-prose-headings': theme('colors.gray.900'),
            '--tw-prose-links': theme('colors.brand.700'),
            '--tw-prose-bold': theme('colors.gray.900'),
            '--tw-prose-quotes': theme('colors.gray.700'),
            '--tw-prose-quote-borders': theme('colors.brand.200'),
            '--tw-prose-bullets': theme('colors.brand.400'),
            '--tw-prose-counters': theme('colors.gray.500'),
            '--tw-prose-hr': theme('colors.gray.200'),
            '--tw-prose-captions': theme('colors.gray.500'),
            '--tw-prose-code': theme('colors.brand.800'),
            fontFamily: theme('fontFamily.sans').join(', '),
            lineHeight: '1.7',
            'h1, h2, h3, h4': {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontWeight: '600',
              letterSpacing: '-0.01em',
            },
            a: {
              textDecorationColor: theme('colors.brand.300'),
              textUnderlineOffset: '3px',
              textDecorationThickness: '1px',
              fontWeight: '500',
            },
            'a:hover': { textDecorationColor: 'currentColor' },
            blockquote: { fontStyle: 'normal' },
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: '500',
              backgroundColor: theme('colors.brand.50'),
              borderRadius: '0.25rem',
              padding: '0.1em 0.3em',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            'figcaption, .caption': { fontFamily: theme('fontFamily.sans').join(', ') },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray.200'),
            '--tw-prose-headings': theme('colors.gray.50'),
            '--tw-prose-links': theme('colors.brand.300'),
            '--tw-prose-bold': theme('colors.gray.50'),
            '--tw-prose-quotes': theme('colors.gray.300'),
            '--tw-prose-quote-borders': theme('colors.brand.800'),
            '--tw-prose-bullets': theme('colors.brand.400'),
            '--tw-prose-hr': theme('colors.gray.800'),
            '--tw-prose-code': theme('colors.brand.200'),
            a: { textDecorationColor: theme('colors.brand.700') },
            code: { backgroundColor: theme('colors.gray.800') },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
