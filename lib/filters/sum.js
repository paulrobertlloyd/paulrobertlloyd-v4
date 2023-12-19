/**
 * Returns sum of object values in array
 * @param {Array} array - Array to filter
 * @param {string} keyPath - Key to inspect
 * @returns {number} Sum of object values in array
 */
export default (array, keyPath) => {
  let sum = 0;

  for (const item of array) {
    sum += Number(item.data[keyPath]);
  }

  return sum;
};
