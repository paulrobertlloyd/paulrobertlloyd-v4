const startCase = require('lodash/startCase');

/**
 * Convert a string into a hashtag
 *
 * @param {String} string String, i.e. Foo bar
 * @return {String} Hashtag, i.e. #FooBar
 */
module.exports = string => {
  string = string.replace(/@/g, 'at');
  string = startCase(string).replace(/\s/g, '');
  return `#${string}`;
};
