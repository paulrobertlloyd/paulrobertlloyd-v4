/**
 * Remove links to Twitter from mentioned @usernames
 *
 * @param {String} str Original text
 * @return {String} Manipulated text
 *
 */
module.exports = str => {
  if (typeof str !== 'undefined') {
    const regex = /<a\b[^>]*>@([\w]*)<\/a>/ig;
    return str.replace(regex, '@$1');
  }
};
