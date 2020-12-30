/**
 * Prepend a base url value to given URL
 *
 * @param {string} url URL
 * @param {string} base Base URL
 * @returns {string} Absolute URL
 */
module.exports = (url, base) => {
  try {
    return (new URL(url, base)).toString();
  } catch {
    console.warn('Trying to convert %o to be an absolute url with base %o and failed, returning: %o (invalid url)', url, base, url);
    return url;
  }
};
