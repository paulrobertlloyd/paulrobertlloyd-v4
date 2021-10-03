const slugify = require('@sindresorhus/slugify');

/**
 * Convert a string into a URL slug
 *
 * @param {string} string String, i.e. Foo Bar
 * @returns {string} Slugified string, i.e. foo_bar
 */
module.exports = string => {
  if (!string) {
    return string;
  }

  return slugify(string, {
    customReplacements: [
      ['.', ''],
      ['@', 'at'],
    ],
    decamelize: false,
    separator: '_',
  });
};
