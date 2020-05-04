const path = require('path');
const dataDir = path.resolve(process.env.PWD, 'src', 'data');
const places = require(path.join(dataDir, 'places'))();

/**
 * Get place information
 *
 * @param {String} id String, IATA or plus code i.e. LGW or 9C3X5R39+F5
 * @return {Object} Place data
 */
module.exports = id => {
  return places.find(
    place => place.iata === id || place.address['plus-code'] === id
  );
};
