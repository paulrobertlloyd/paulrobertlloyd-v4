const {getDistance} = require('geolib');
const getPlace = require('./get-place.js');

/**
 * Get distance travelled
 *
 * @param {Array} stops - Stops in trip
 * @returns {number} Distance travelled, in km
 */
module.exports = async function (stops) {
  let distance = 0;

  for (const [index, stop] of stops.entries()) {
    const nextStop = stops[index + 1];
    if (nextStop) {
      const thisGeo = getPlace(stop.label)?.geo;
      const nextGeo = getPlace(nextStop.label)?.geo;
      const legDistance = getDistance(thisGeo, nextGeo);
      distance += legDistance;
    }
  }

  return Math.ceil(distance / 1000);
};
