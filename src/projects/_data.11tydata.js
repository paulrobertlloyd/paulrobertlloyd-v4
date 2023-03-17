module.exports = {
  layout: 'project',
  syndicate: true,
  type: 'entry',
  permalink: 'projects/{{ page.fileSlug }}/',
  tags: ['project'],
  vocab: 'entry',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.9,
  }
};
