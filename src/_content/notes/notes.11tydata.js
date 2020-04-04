module.exports = {
  layout: 'note',
  permalink: 'notes/{{ page.fileSlug }}/',
  tags: ['post', 'note'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    title: 'Note: {{ date | date: dates.datetime_full }}',
    exclude_title_from_feed: true
  }
};
