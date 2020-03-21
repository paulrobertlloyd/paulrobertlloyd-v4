/**
 * Removes (index).html from a string
 * @see https://www.w3.org/Provider/Style/URI.html
 *
 * @param {String} string URL, i.e. /page/index.html
 * @return {String} Permalinkable URL, i.e. /page/
 */
module.exports = string => {
  string = String(string);
  return string.replace(/(?:index)?\.html/g, '');
};
