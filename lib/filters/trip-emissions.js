const modes = require('../../src/_data/modes.js');
const getPlace = require('../utils/get-place.js');

/**
 * Get carbon emitted
 *
 * @param {Array} itinerary - Trip itinerary
 * @param {number} distance - Distance travelled
 * @returns {number} Carbon emitted, in kg
 */
module.exports = function (itinerary, distance) {
  const category = getPlace(itinerary[0].label)?.category[0];
  return Math.ceil(distance * modes[category].emissions);
};
