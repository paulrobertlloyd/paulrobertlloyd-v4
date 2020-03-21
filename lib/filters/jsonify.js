/**
 * Converts an object or value to a JSON string
 *
 * @param {(Object|String)} string Object or string
 * @return {String} Valid JSON string
 */
module.exports = string => {
  return JSON.stringify(string);
};
