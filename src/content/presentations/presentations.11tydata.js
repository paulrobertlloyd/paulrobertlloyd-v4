module.exports = {
  layout: 'presentation',
  type: 'entry',
  permalink: 'presentations/{{ page.date | date: "yyyy/MM" }}/{{ page.fileSlug }}/',
  tags: ['post', 'presentation'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.9,
  duotoneCardImage: true,
  eleventyComputed: {
    url: data => data['bookmark-of'],
  },
};
