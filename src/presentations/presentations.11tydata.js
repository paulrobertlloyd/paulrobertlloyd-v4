module.exports = {
  layout: 'presentation',
  type: 'entry',
  permalink: '/presentations/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['post', 'presentation'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.9,
  duotoneCardImage: true,
  eleventyComputed: {
    url: data => data.bookmark_of,
  },
};
