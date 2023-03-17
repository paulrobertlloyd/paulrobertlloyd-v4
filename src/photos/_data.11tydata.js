module.exports = {
  layout: 'photo',
  permalink: 'photos/{{ page.fileSlug }}/',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.8,
  },
  syndicate: true,
  type_prefix: 'p',
  vocabulary: 'entry',
};
