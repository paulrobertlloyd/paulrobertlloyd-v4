import { html } from "../utils/html.js";

/**
 * Get external URL
 * @param {string} url - URL, i.e. https://website.example
 * @param {string} [classes] - Link classes
 * @returns {string} Link to external URL
 */
export const getExternalUrlHtml = (url, classes = "u-bookmark-of") => {
  if (!url) {
    return "";
  }

  const { href, hostname } = new URL(String(url));
  const website = hostname.replaceAll(/(?:www\.)?/g, "");

  return html`<a class="${classes}" rel="external" href="${href}"
    >${website}</a
  >`;
};
