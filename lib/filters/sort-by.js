/**
 * Sort array by values in named key
 *
 * @param {Array} arr Array to sort
 * @param {String} keyPath Key to inspect
 * @return {Array} Sorted array
 */
module.exports = (arr, keyPath) => {
  return arr.sort((a, b) => {
    let x = a;
    for (const key of keyPath.split('.')) {
      x = x[key];
    }

    let y = b;
    for (const key of keyPath.split('.')) {
      y = y[key];
    }

    if (x < y) {
      return -1;
    }

    if (x > y) {
      return 1;
    }

    return 0;
  });
};
