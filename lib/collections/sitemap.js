// Sitemap collections
//
// Scheduled
// =========
// 11ty doesn’t support scheduled posts, so need to remove
// posts with a future date from `collections.post`
// See: https://github.com/11ty/eleventy/issues/26
module.exports = collection => {
  const indexable = p => {
    const now = new Date();
    const published = p.date <= now;
    const {hidden, priority} = p.data;
    if (published && (hidden !== true) && (priority)) {
      return true;
    }
  };

  return collection.getAll().filter(indexable);
};
