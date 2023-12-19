/**
 * Generate itinerary data from trip post
 * @param {Array} collection - Collection
 * @param {string} tripId - Trip ID
 * @returns {object} Itinerary data
 */
export default (collection, tripId) => {
  const geojson = {
    type: "FeatureCollection",
    features: [],
  };

  const trips = collection
    .filter((trip) => tripId.includes(trip.data.id))
    .reverse();

  for (const trip of trips) {
    geojson.features.push(...trip.data.geojson.features);
  }

  return {
    geojson,
    trips,
    start: trips[0]?.date,
    end: trips.at(-1)?.date || false,
  };
};
