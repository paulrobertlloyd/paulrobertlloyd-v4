/**
 * Generate GeoJSON from combined posts in a collection
 * @param {Array} collection - Collection
 * @returns {object} GeoJSON
 */
export const getGeojson = (collection) => {
  if (!collection) {
    return {};
  }

  const geojson = {
    type: "FeatureCollection",
    features: [],
  };

  for (const item of collection) {
    if (item.data.geojson) {
      geojson.features.push(...item.data.geojson.features);
    }
  }

  return geojson;
};

/**
 * Get sibling pages
 * @param {Array} collection - Collection
 * @param {string} tag - Collection tag name
 * @returns {Array} Sibling pages
 */
export function getSiblings(collection, tag) {
  return collection
    .filter((item) => item.data?.tags?.includes(tag))
    .filter((item) => item.url !== this.page.url);
}

/**
 * Get all public content items, in Eleventy’s order (oldest first)
 *
 * Excludes unlisted posts, and posts with a future date: Eleventy has no
 * concept of scheduled publishing.
 * @see {@link https://github.com/11ty/eleventy/issues/26}
 * @param {object} collection - Eleventy collection API
 * @returns {Array} Public items
 */
export const getPublicItems = (collection) =>
  collection
    .getFilteredByGlob("src/content/**/*.markdown")
    .filter((item) => item.date <= new Date())
    .filter((item) => item.data.visibility !== "unlisted");
