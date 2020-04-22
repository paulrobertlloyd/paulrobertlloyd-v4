module.exports = {
  layout: 'bookmark',
  type: 'entry',
  permalink: 'bookmarks/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['post', 'bookmark'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    url: data => data['bookmark-of'],
    summary: '{{ url | hostname }}'
  }
};
