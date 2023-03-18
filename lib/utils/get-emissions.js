const modes = require('../../src/_data/modes.js');
const getPlace = require('./get-place.js');

/**
 * Get carbon emitted
 *
 * @param {Array} stops - Stops in trip
 * @param {number} distance - Distance travelled
 * @returns {number} Carbon emitted, in kg
 */
module.exports = async function (stops, distance) {
  const {category} = getPlace(stops[0].label);

  return Math.ceil(distance * modes[category[0]].emissions);
};
