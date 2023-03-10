const path = require('path');

const dataDir = path.resolve(process.env.PWD, 'src', 'data');
const places = require(path.join(dataDir, 'places'))();

/**
 * Get place information
 *
 * @param {string} id String, IATA or plus code i.e. LGW or 9C3X5R39+F5
 * @returns {object} Place data
 */
module.exports = id => places.find(
  place => place.iata === id || place.address.plus_code === id,
);
