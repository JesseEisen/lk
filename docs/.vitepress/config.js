const { getPosts } = require('./getPosts')
const { getDaily } = require('./getDaily')

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Chan',
  description: 'A PKM Site',
  customData: {
    posts: getPosts(),
    daily: getDaily(),
  },
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css',
      },
    ],
  ],
  markdown: {
    toc: {
      includeLevel: [2],
    },
    config: (md) => {
      md.use(require('markdown-it-katex'))
    },
  },
}
