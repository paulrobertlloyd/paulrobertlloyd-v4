module.exports = {
  layout: 'article',
  type: 'entry',
  permalink: '{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['post', 'article'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.9
};
