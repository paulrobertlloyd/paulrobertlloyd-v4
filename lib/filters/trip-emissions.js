const modes = require('../../src/_data/modes.js');

/**
 * Get carbon emitted
 *
 * @param {number} distance - Distance travelled
 * @param {string} category - Stop category
 * @returns {number} Carbon emitted, in kg
 */
module.exports = async function (distance, category) {
  return Math.ceil(distance * modes[category].emissions);
};
