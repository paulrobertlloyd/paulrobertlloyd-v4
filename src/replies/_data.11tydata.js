module.exports = {
  layout: 'reply',
  type: 'entry-untitled',
  type_prefix: 'r',
  permalink: 'replies/{{ page.fileSlug }}/',
  tags: ['reply'],
  vocabulary: 'entry',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.8,
  },
  visibility: 'unlisted',
  eleventyComputed: {
    page_title: 'Reply: {{ date | date: dates.date_time }} · {{ app.name }}',
    image: '{{ photo[0].url }}',
  },
};
