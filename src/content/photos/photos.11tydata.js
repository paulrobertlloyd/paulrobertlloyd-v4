module.exports = {
  layout: 'photo',
  type: 'entry-untitled',
  permalink: 'photos/{{ page.fileSlug }}/',
  tags: ['post', 'photo'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    pageTitle: '{% if photo.size > 1 -%}{{ photo.size }} photos{% else %}Photo{% endif %}: {{ date | date: dates.datetime_full }} · {{ app.title }}',
    image: '{{ photo[0].url }}'
  }
};
