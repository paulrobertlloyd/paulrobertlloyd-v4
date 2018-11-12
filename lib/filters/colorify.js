const stringToColor = require('string-to-color');

/**
 * Convert a string into a valid hex colour
 *
 * @param {String} str String
 * @return {String} RGB hex code, i.e. "#7f1de4"
 *
 */
module.exports = function (str) {
  return stringToColor(str);
};
