module.exports = {
  layout: 'reply',
  type: 'entry-untitled',
  permalink: 'replies/{{ page.fileSlug }}/',
  tags: ['reply'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    pageTitle: 'Reply: {{ date | date: dates.datetime_full }} · {{ app.title }}',
    image: '{{ photo[0].url }}',
    inReplyTo: data => data['in-reply-to']
  }
};
