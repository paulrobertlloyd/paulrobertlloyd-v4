/**
 * Pad a string with zero
 *
 * @param {String} str String to pad
 * @param {String} length Length of padded string
 * @return {String} Padded string
 *
 */
module.exports = function (str, length) {
  str = String(str);
  return str.padStart(length, '0');
};
