module.exports = {
  layout: 'article',
  permalink: 'articles/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.9,
  },
  syndicate: true,
  type_index: 1,
  type_prefix: 'a',
  vocabulary: 'entry',
};
