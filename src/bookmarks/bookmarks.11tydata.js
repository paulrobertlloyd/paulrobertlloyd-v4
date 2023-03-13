module.exports = {
  layout: 'bookmark',
  type: 'entry',
  type_prefix: 'b',
  permalink: 'bookmarks/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['post', 'bookmark'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    summary: '{{ bookmark_of | hostname }}',
  },
};
