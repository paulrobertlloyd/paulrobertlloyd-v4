module.exports = {
  layout: 'article',
  type: 'entry',
  permalink: '{{ page.date | date: "yyyy/MM" }}/{{ page.fileSlug }}/',
  tags: ['post', 'article'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.9,
  duotoneCardImage: true,
};
