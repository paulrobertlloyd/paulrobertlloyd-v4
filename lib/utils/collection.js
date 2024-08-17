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
