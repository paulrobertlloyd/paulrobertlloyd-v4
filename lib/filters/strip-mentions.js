/**
 * Remove links to Twitter from mentioned @usernames
 *
 * @param {string} string Original text
 * @returns {string} Manipulated text
 */
module.exports = string => {
  if (typeof string !== 'undefined') {
    const regex = /<a\b[^>]*>@(\w*)<\/a>/gi;
    return string.replace(regex, '@$1');
  }
};
