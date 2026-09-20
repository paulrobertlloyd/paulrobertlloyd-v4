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

/**
 * Get a paginated page’s URL, using a query parameter
 * @param {string} href - Page href, for example `/notes/page/2.html`
 * @returns {string} URL, for example `/notes/?page=2`
 * @see Paginated lists rule in `_redirects`
 */
export const getPaginationUrl = (href) =>
  href?.replace(/page\/(\d+)\.html$/, "?page=$1");
