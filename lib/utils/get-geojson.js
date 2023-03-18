const modes = require('../../src/_data/modes.js');
const getPlace = require('./get-place.js');

/**
 * Get GeoJSON
 *
 * @param {Array} itinerary - Trip itinerary
 * @returns {object} GeoJSON
 */
module.exports = function (itinerary) {
  const geojson = {
    type: 'FeatureCollection',
    features: [],
  };

  for (const [index, stop] of itinerary.entries()) {
    const nextStop = itinerary[index + 1];
    if (nextStop) {
      const thisPlace = getPlace(stop.label);
      const nextPlace = getPlace(nextStop.label);
      const feature = {
        type: 'Feature',
        properties: {
          stroke: modes[thisPlace.category[0]].color,
          'stroke-opacity': 0.75,
          'stroke-width': 4,
        },
        geometry: {
          type: 'LineString',
          coordinates: [
            [thisPlace.geo.longitude, thisPlace.geo.latitude],
            [nextPlace.geo.longitude, nextPlace.geo.latitude],
          ],
        },
      };

      geojson.features.push(feature);
    }
  }

  return geojson;
};
