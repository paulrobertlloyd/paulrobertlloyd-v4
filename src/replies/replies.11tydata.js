module.exports = {
  layout: 'reply',
  type: 'entry-untitled',
  permalink: 'replies/{{ page.fileSlug }}/',
  tags: ['post', 'reply'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    title: 'Reply: {{ date | date: dates.datetime_full }}',
    image: '{{ photo[0].url }}',
    inReplyTo: data => data['in-reply-to'],
  },
};
