module.exports = {
  layout: 'article',
  type: 'entry',
  type_prefix: 'a',
  permalink: '/articles/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['post', 'article'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.9,
  duotoneCardImage: true,
};
