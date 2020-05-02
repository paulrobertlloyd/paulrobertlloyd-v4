module.exports = {
  layout: 'presentation',
  type: 'entry',
  permalink: 'presentations/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['post', 'presentation'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.9,
  duotone_card_image: true,
  eleventyComputed: {
    url: data => data['bookmark-of']
  }
};
