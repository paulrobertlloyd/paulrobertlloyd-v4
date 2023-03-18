const modes = require('../../src/_data/modes.js');
const getPlace = require('./get-place.js');

/**
 * Get GeoJSON
 *
 * @param {Array} stops - Stops in trip
 * @returns {object} GeoJSON
 */
module.exports = async function (stops) {
  const geojson = {
    type: 'FeatureCollection',
    features: [],
  };

  for (const [index, stop] of stops.entries()) {
    const nextStop = stops[index + 1];
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
