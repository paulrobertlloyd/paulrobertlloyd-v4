import { html } from "../utils/html.js";

const SERVICES = new Map([
  ["bsky.app", "Bluesky"],
  ["glass.photo", "Glass"],
  ["dribbble.com", "Dribbble"],
  ["linkedin.com", "LinkedIn"],
  ["mastodon.social", "Mastodon"],
  ["web.archive.org", "Internet Archive"],
]);

/**
 * Get link to syndicated copy of post
 * @param {string} url - URL, for example https://mastodon.social/@paulrobertlloyd/114310106893622577
 * @returns {string} HTML link, labelled with service name
 */
export const getSyndicationHtml = (url) => {
  if (!url) {
    return "";
  }

  const { href, hostname } = new URL(String(url));
  const service = hostname.replace(/^www\./, "");
  const label = SERVICES.get(service) ?? service;

  return html`<a class="u-syndication" rel="syndication external" href="${href}"
    >${label}</a
  >`;
};
