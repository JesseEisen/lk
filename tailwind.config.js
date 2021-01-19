module.exports = {
  purge: [
    './index.md',
    './posts/*.md',
    './.vitepress/**/*.{vue,js,ts,jsx,tsx}',
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
