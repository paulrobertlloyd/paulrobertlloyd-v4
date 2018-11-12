/**
 * Removes (index).html from a string
 *
 * @param {String} str URL, i.e. /page/index.html
 * @return {String} Permalinkable URL, i.e. /page/
 *
 */
module.exports = function (str) {
  return str.replace(/(?:index)?\.html/g, '');
};
