/**
 * Select objects in array whose key includes a value
 *
 * @param {Array} array - Array to filter
 * @param {string} keyPath - Key to inspect
 * @param {string} value - Value key needs to include
 * @returns {Array} Filtered array
 */
module.exports = (array, keyPath, value) => array.filter(item => {
  let data = item;
  for (const key of keyPath.split('.')) {
    data = data[key];
  }

  // If data doesn’t exist, abort
  if (!data) {
    return false;
  }

  // If data is a Date, reformat as ISO 8601
  if (data instanceof Date) {
    data = data.toISOString();
  }

  return (data.includes(value) ? item : false);
});
