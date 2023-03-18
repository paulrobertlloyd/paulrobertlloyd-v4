module.exports = {
  layout: 'trip',
  type_prefix: 't',
  visibility: 'unlisted',
  vocabulary: 'event',
  eleventyComputed: {
    permalink: data => `trips/${data.uid}/`,
  },
};
