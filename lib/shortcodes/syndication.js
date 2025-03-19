const labels = {
  "glass.photo": "Glass",
  "dribbble.com": "Dribbble",
  "linkedin.com": "LinkedIn",
  "mastodon.social": "Mastodon",
  "web.archive.org": "Internet Archive",
};

/**
 * Get service name from URL
 * @param {string} url - URL, i.e. https://twitter.com/paulrobertlloyd/status/1317139864257691650
 * @returns {string} Service name, i.e. Twitter
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
