module.exports = {
  layout: 'photo',
  type: 'entry-untitled',
  permalink: 'photos/{{ page.fileSlug }}/',
  tags: ['post', 'photo'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    pageTitle: 'Photo{% if photo.size > 1 -%}s{% endif %}: {{ date | date: dates.datetime_full }} · {{ app.title }}',
    image: '{{ photo[0].url }}'
  }
};
