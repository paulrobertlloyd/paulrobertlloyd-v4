module.exports = {
  layout: 'presentation',
  syndicate: true,
  type: 'entry',
  type_prefix: 's',
  permalink: 'presentations/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['presentation'],
  vocabulary: 'entry',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.9,
  },
  duotoneCardImage: true,
  eleventyComputed: {
    url: data => data.bookmark_of,
  },
};
