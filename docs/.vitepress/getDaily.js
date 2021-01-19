const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

exports.getDaily = function getDaily(asFeed = false) {
  const postDir = path.resolve(__dirname, '../daily')
  return fs
    .readdirSync(postDir)
    .map((file) => {
      const src = fs.readFileSync(path.join(postDir, file), 'utf-8')
      const { data, content, excerpt } = matter(src, { excerpt: true })
      const post = {
        title: data.title,
        subtitle: data.subtitle,
        href: `/daily/${file.replace(/\.md$/, '.html')}`,
        category: data.category,
        date: formatDate(data.date),
        excerpt,
      }
      if (asFeed) {
        post.data = data
      }

      return post
    })
    .sort((a, b) => b.date.time - a.date.time)
}

function formatDate(date) {
  if (!date instanceof Date) {
    date = new Date(date)
  }

  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-Us', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }
}
