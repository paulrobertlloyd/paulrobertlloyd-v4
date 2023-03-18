/**
 * Generate itinerary data from trip post
 *
 * @param {Array} collection - Collection
 * @param {string} trip_id - Trip ID
 * @returns {object} Itinerary data
 */
module.exports = (collection, trip_id) => {
  const geojson = {
    type: 'FeatureCollection',
    features: [],
  };

  const trips = collection.filter(trip => trip_id.includes(trip.data.uid));
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
