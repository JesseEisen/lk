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
  markdown: {
    toc: {
      includeLevel: [2],
    },
  },
}
