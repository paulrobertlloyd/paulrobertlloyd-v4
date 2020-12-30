/**
 * Convert a string into a hashtag
 *
 * @param {string} string String, i.e. Foo bar
 * @returns {string} Hashtag, i.e. #FooBar
 */
module.exports = string => {
  string = string.replace(/@/g, 'at');
  string = string.toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.slice(0, 1))
    .join('');
  return `#${string}`;
};
