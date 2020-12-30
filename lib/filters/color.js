const stringToColor = require('string-to-color');

/**
 * Convert a string into a valid hex colour
 *
 * @param {string} string String
 * @returns {string} RGB hex code, i.e. "#7f1de4"
 */
module.exports = string => {
  return stringToColor(string);
};
