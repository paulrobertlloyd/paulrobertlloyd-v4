const get = require('lodash/get');

/**
 * Select objects in array whose key includes a value
 *
 * @param {Array} arr Array to filter
 * @param {String} key Key to inspect
 * @param {String} value Value key needs to include
 * @return {Array} Filtered array
 */
module.exports = (arr, key, value) => {
  return arr.filter(item => {
    let field = get(item, key);

    // If field doesn’t exist, abort
    if (!field) {
      return false;
    }

    // If field is a Date, reformat as ISO 8601
    if (field instanceof Date) {
      field = field.toISOString();
    }

    return (field.includes(value) ? item : false);
  });
};
