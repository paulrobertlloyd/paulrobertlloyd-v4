/**
 * Get comments for a post
 *
 * @param {Array} collection - Collection
 * @param {string} id - ID
 * @param {string} [key=article_id] - Key to lookup
 * @returns {object} Comments
 */
module.exports = (collection, id, key = 'article_id') => {
  const post = collection.find(item => item.data[key] === id);

  if (post) {
    return {
      url: post.url,
      count: post.data.comments.length
    };
  }
};
