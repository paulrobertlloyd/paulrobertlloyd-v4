const {decode} = require('pluscodes');

/**
 * Convert plus code into a lat/lng values
 *
 * @param {String} str String
 * @return {Object} Latitude, longitude and resolution
 *
 */
module.exports = str => {
  const pluscode = str.toUpperCase();
  return decode(pluscode);
};
