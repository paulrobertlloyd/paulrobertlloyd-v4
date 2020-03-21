/**
 * Remove links to Twitter from mentioned @usernames
 *
 * @param {String} string Original text
 * @return {String} Manipulated text
 */
module.exports = string => {
  if (typeof string !== 'undefined') {
    const regex = /<a\b[^>]*>@(\w*)<\/a>/gi;
    return string.replace(regex, '@$1');
  }
};
