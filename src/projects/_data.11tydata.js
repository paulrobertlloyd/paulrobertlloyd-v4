module.exports = {
  layout: 'project',
  syndicate: true,
  permalink: 'projects/{{ page.fileSlug }}/',
  tags: ['project'],
  vocabulary: 'entry',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.9,
  }
};
