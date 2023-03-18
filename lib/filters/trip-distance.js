const {getDistance} = require('geolib');
const getPlace = require('../utils/get-place.js');

/**
 * Get distance travelled
 *
 * @param {Array} itinerary - Trip itinerary
 * @returns {number} Distance travelled, in km
 */
module.exports = async function (itinerary) {
  let distance = 0;

  for (const [index, stop] of itinerary.entries()) {
    const nextStop = itinerary[index + 1];
    if (nextStop) {
      const thisGeo = getPlace(stop.label)?.geo;
      const nextGeo = getPlace(nextStop.label)?.geo;
      const legDistance = getDistance(thisGeo, nextGeo);
      distance += legDistance;
    }
  }

  return Math.ceil(distance / 1000);
};
