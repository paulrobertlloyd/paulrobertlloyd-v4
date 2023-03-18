module.exports = {
  layout: 'itinerary',
  permalink: 'travel/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  sitemap: {
    changefreq: 'yearly',
    priority: 0.8,
  },
  type_prefix: 'i',
  vocabulary: 'event',
};
