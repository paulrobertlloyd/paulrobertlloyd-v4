// Post type collections
//
// Reversal
// ========
// Adding `reversed` Liquid option to `collections.post` doesn’t
// collate allposts in date decending order, so need to collate
// and reverse here instead. Setting a default sort order may
// resolve this. See: https://github.com/11ty/eleventy/issues/367
//
// Scheduled
// =========
// 11ty doesn’t support scheduled posts, so need to remove
// posts with a future date from `collections.post`
// See: https://github.com/11ty/eleventy/issues/26
module.exports = collection => {
  const now = new Date();

  return collection.getFilteredByTag('post').filter(item => item.date <= now).reverse();
};
