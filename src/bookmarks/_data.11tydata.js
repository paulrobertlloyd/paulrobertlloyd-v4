module.exports = {
  layout: 'bookmark',
  permalink: 'bookmarks/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.8,
  },
  syndicate: true,
  type_prefix: 'b',
  vocabulary: 'entry',
};
