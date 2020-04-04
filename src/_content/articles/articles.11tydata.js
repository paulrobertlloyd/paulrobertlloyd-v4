module.exports = {
  layout: 'article',
  permalink: '{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['post', 'article'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.9
};
