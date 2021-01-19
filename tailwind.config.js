module.exports = {
  purge: [
    './index.md',
    './docs/posts/*.md',
    './docs/daily/*.md',
    './docs/.vitepress/*.{vue,js,ts,jsx,tsx}',
    './docs/.vitepress/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {},
      },
    },
    fontFamily: {
      sans: ['serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
