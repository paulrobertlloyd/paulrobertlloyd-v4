const slugify = require('slugify');

/**
 * Convert a string into a URL slug
 *
 * @param {String} string String, i.e. Foo Bar
 * @return {String} Slugified string, i.e. foo_bar
 */
module.exports = string => {
  return slugify(string, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    replacement: '_'
  });
};
