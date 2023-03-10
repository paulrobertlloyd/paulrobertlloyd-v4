/**
 * Remove links to Twitter from mentioned @usernames
 *
 * @param {string} string Original text
 * @returns {string} Manipulated text
 */
module.exports = string => {
  if (!string) {
    return '';
  }

  return string.replace(/<a\b[^>]*>@(\w*)<\/a>/gi, '@$1');
};
