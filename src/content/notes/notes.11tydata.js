module.exports = {
  layout: 'note',
  type: 'entry-untitled',
  permalink: 'notes/{{ page.fileSlug }}/',
  tags: ['post', 'note'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    pageTitle: 'Note: {{ date | date: dates.datetime_full }} · {{ app.title }}'
  }
};
