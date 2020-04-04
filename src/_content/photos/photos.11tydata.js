module.exports = {
  layout: 'photo',
  permalink: 'photos/{{ page.fileSlug }}/',
  tags: ['post', 'photo'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    title: 'Photo{% if photo.size > 1 -%}s{% endif %}: {{ date | date: dates.datetime_full }}',
    exclude_title_from_feed: true,
    image: '{{ photo[0].url }}'
  }
};
