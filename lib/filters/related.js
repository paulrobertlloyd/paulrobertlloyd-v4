/**
 * Find related posts in a collection
 *
 * @param {Array} arr Array to filter
 * @param {Array} collection Collection name
 * @param {String} page Current page
 * @return {Array} Filtered array
 */
module.exports = (arr, collection, page) => {
  return arr.filter(item =>
    item.url !== page.url &&
    item.data.collection === collection
  );
};
