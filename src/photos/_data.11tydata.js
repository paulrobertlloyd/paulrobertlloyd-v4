module.exports = {
  layout: 'photo',
  syndicate: true,
  type: 'entry-untitled',
  type_prefix: 'p',
  permalink: 'photos/{{ page.fileSlug }}/',
  tags: ['photo'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    title: '{% if photo.size > 1 -%}{{ photo.size }} photos{% else %}Photo{% endif %}: {{ date | date: dates.datetime_full }}',
  },
};
