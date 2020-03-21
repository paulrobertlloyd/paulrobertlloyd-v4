const slugify = require('@sindresorhus/slugify');

/**
 * Convert a string into a URL slug
 *
 * @param {String} string String, i.e. Foo Bar
 * @return {String} Slugified string, i.e. foo_bar
 */
module.exports = string => {
  return slugify(string, {
    separator: '_',
    customReplacements: [
      ['@', 'at']
    ]
  });
};
