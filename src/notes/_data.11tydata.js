module.exports = {
  layout: 'note',
  syndicate: true,
  type: 'entry-untitled',
  type_prefix: 'n',
  permalink: 'notes/{{ page.fileSlug }}/',
  tags: ['note'],
  vocab: 'entry',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.8,
  },
  eleventyComputed: {
    title: 'Note: {{ date | date: dates.datetime_full }}',
  },
};
