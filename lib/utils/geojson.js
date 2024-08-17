/**
 * Generate GeoJSON data from trip posts
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

  const trips = collection.filter(
    (collection) => collection.data.type === "trip",
  );

  for (const item of trips) {
    geojson.features.push(...item.data.geojson.features);
  }

  return geojson;
};
