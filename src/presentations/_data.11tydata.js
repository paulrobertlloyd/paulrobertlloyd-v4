module.exports = {
  layout: 'presentation',
  permalink: 'presentations/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.9,
  },
  syndicate: true,
  type_prefix: 's',
  vocabulary: 'entry',
};
