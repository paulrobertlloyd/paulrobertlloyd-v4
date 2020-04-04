module.exports = {
  layout: 'presentation',
  permalink: 'presentations/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['post', 'presentation'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.9,
  eleventyComputed: {
    url: data => data['bookmark-of']
  }
};
