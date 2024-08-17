/**
 * Get sibling posts
 * @param {Array} collection - Post collection
 * @param {string} tag - Post collection
 * @returns {Array} Sibling posts
 */
export function getSiblings(collection, tag) {
  return collection
    .filter((item) => item.data?.tags?.includes(tag))
    .filter((item) => item.url !== this.page.url);
}
