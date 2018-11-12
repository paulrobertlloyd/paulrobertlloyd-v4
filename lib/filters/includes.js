/**
 * Select objects in array whose key includes a value
 *
 * @param {Array} arr Array to test
 * @param {String} key Key to inspect
 * @param {String} value Value key needs to include
 * @return {String} Filtered array
 *
 */
module.exports = function (arr, key, value) {
  return arr.filter(item => {
    const keys = key.split('.');
    const reduce = keys.reduce((object, key) => {
      return object[key];
    }, item);
    const str = String(reduce);

    return (str.includes(value) ? item : false);
  });
};
