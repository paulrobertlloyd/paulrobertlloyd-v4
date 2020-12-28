const {decode} = require('pluscodes');

/**
 * Converts plus code to geo coordinates
 *
 * @param {String} string Plus code, i.e. 9FFW84J9+XG
 * @return {String} Geo coordinates, i.e. {
 *   latitude: 59.332438,
 *   longitude: 18.118813,
 *   resolution: 0.000125
 * }
 */
module.exports = string => {
  return decode(string);
};
