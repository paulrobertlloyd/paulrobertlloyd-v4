const modes = require('../../src/_data/modes.js');
const getPlace = require('../utils/get-place.js');

/**
 * Get stop icon
 *
 * @param {Array} stop - Trip stop
 * @returns {string} Trip icon
 */
module.exports = function (stop) {
  const category = getPlace(stop.label)?.category[0];
  return modes[category].icon;
};
