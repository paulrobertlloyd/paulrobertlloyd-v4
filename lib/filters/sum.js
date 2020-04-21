/**
 * Returns sum of object values in array
 *
 * @param {Array} array Array to filter
 * @param {String} keyPath Key to inspect
 */
module.exports = (array, keyPath) => {
  let sum = 0;

  array.forEach(obj => {
    sum += obj[keyPath];
  });

  return sum;
}
