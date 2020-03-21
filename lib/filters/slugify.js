const slugify = require('@sindresorhus/slugify');

/**
 * Convert a string into a URL slug
 *
 * @param {String} str String
 * @return {String} Slugified string
 */
module.exports = str => {
  return slugify(str, {
    separator: '_',
    customReplacements: [
      ['@', 'at']
    ]
  });
};
