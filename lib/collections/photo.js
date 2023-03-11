// Post type collections
//
// Scheduled
// =========
// 11ty doesn’t support scheduled posts, so need to remove
// posts with a future date from `collections.post`
// See: https://github.com/11ty/eleventy/issues/26
module.exports = collection => collection.getFilteredByTag('photo')
  .filter(item => item.date <= new Date());
