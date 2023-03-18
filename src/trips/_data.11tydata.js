module.exports = {
  layout: 'trip',
  sitemap: {
    changefreq: 'monthly',
    priority: 0.8,
  },
  type_prefix: 't',
  visibility: 'unlisted',
  vocabulary: 'event',
  eleventyComputed: {
    permalink: data => `trips/${data.uid}/`,
  },
};
