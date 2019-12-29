// Sitemap collections
//
// Scheduled
// =========
// 11ty doesn’t support scheduled posts, so need to remove
// posts with a future date from `collections.post`
// See: https://github.com/11ty/eleventy/issues/26
module.exports = collection => {
  const now = new Date();
  const published = p => p.date <= now;

  return collection.getFilteredByGlob('**/*.md').filter(published);
};
