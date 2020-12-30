const slugify = require('slugify');

/**
 * Convert a string into a URL slug
 *
 * @param {string} string String, i.e. Foo Bar
 * @returns {string} Slugified string, i.e. foo_bar
 */
module.exports = string => {
  return slugify(string, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    replacement: '_'
  });
};
