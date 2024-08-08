/**
 * Get external URL
 * @param {string} url - URL, i.e. https://website.example
 * @param {string} [classes] - Link classes
 * @returns {string} Link to external URL
 */
export const external_url = (url, classes = "u-bookmark-of") => {
  if (!url) {
    return "";
  }

  let { href, hostname } = new URL(String(url));
  hostname = hostname.replaceAll(/(?:www\.)?/g, "");

  return `<a class="${classes}" rel="external" href="${href}">${hostname}</a>`;
};
