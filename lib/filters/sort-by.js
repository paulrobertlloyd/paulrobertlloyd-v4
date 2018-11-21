/**
 * Sort array by values in named key
 *
 * @param {Array} arr Array to sort
 * @param {String} key Key to sort by
 * @return {Array} Sorted array
 *
 */
module.exports = function (arr, key) {
  return arr.sort((a, b) => {
    // Convert string using dot notation into object reference
    // https://stackoverflow.com/questions/6393943
    const x = key.split('.').reduce((o, i) => o[i], a);
    const y = key.split('.').reduce((o, i) => o[i], b);

    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
};
