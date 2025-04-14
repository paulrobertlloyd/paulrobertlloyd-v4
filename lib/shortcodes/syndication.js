const labels = {
  "bsky.app": "Bluesky",
  "glass.photo": "Glass",
  "dribbble.com": "Dribbble",
  "linkedin.com": "LinkedIn",
  "mastodon.social": "Mastodon",
  "web.archive.org": "Internet Archive",
};

/**
 * Get service name from URL
 * @param {string} url - URL, i.e. https://mastodon.social/@paulrobertlloyd/114310106893622577
 * @returns {string} Service name, i.e. Mastodon
 */
export const syndication = (url) => {
  if (!url) {
    return "";
  }

  let { href, hostname } = new URL(String(url));
  hostname = hostname.replaceAll(/(?:www\.)/g, "");

  const label = labels[hostname] || hostname;

  return `<a class="u-syndication" rel="syndication external" href="${href}">${label}</a>`;
};
