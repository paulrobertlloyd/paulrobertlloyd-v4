/**
 * Convert a URL to an absolute URL
 * @param {string} url - URL, absolute or relative
 * @param {string} base - Base URL
 * @returns {string} Absolute URL, or the original if `base` is invalid
 */
export const getAbsoluteUrl = (url, base) => {
  try {
    return new URL(url, base).href;
  } catch {
    return url;
  }
};
