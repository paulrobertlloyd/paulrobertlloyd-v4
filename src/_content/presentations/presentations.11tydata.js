module.exports = {
  layout: 'presentation',
  permalink: 'presentations/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}.html',
  tags: ['post', 'presentation'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.9,
  eleventyComputed: {
    url: data => data['bookmark-of']
  }
};
