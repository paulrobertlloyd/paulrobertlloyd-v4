const startCase = require('lodash/startCase');

/**
 * Convert a string into a hashtag
 *
 * @param {String} str String
 * @return {String} Slugified string
 */
module.exports = str => {
  str = str.replace(/@/g, 'at');
  str = startCase(str).replace(/\s/g, '');
  return `#${str}`;
};
