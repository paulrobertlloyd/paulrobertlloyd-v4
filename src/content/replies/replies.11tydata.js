module.exports = {
  layout: 'reply',
  type: 'entry-untitled',
  permalink: 'replies/{{ page.fileSlug }}/',
  tags: ['reply'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    page_title: 'Reply: {{ date | date: dates.datetime_full }} · {{ app.title }}',
    image: '{{ photo[0].url }}',
    in_reply_to: data => data['in-reply-to']
  }
};
