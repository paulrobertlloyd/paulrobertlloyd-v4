const typogr = require('typogr');

/**
 * Converts string of text to use “smart” typographic punctuation
 * https://github.com/ekalinin/typogr.js#smartypants
 *
 * @param {String} str Text with 'dumb' ASCII punctuation characters
 * @return {String} Text with ‘smart’ typographic punctuation as HTML entities
 *
 */
module.exports = function (str) {
  return typogr(str).smartypants();
};
