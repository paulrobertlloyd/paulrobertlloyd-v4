/**
 * Find related posts in a collection
 *
 * @param {Array} array Array to filter
 * @param {Array} collection Collection name
 * @param {String} page Current page
 * @return {Array} Filtered array
 */
module.exports = (array, collection, page) => {
  return array.filter(item =>
    item.url !== page.url &&
    item.data.collection === collection
  );
};
