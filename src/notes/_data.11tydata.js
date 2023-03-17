module.exports = {
  layout: 'note',
  syndicate: true,
  type_prefix: 'n',
  permalink: 'notes/{{ page.fileSlug }}/',
  tags: ['note'],
  vocabulary: 'entry',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.8,
  },
  eleventyComputed: {
    page_title: 'Note: {{ date | date: dates.date_time }} · {{ app.name }}',
  },
};
