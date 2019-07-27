/**
 * Converts an object or value to a JSON string
 *
 * @param {(Object|String)} str Object or string
 * @return {String} Valid JSON string
 *
 */
module.exports = str => {
  return JSON.stringify(str);
};
