/**
 * Get service name from URL
 * @param {string} string - URL, i.e. https://twitter.com/paulrobertlloyd/status/1317139864257691650
 * @returns {string} Service name, i.e. Twitter
 */
export default (string) => {
  if (!string) {
    return "";
  }

  string = String(string);
  const { hostname } = new URL(string);
  hostname.replaceAll(/(?:www\.)?/g, "");

  switch (hostname) {
    case "glass.photo": {
      return "Glass";
    }

    case "linkedin.com": {
      return "LinkedIn";
    }

    case "mastodon.social": {
      return "Mastodon";
    }

    case "twitter.com": {
      return "Twitter";
    }

    case "web.archive.org": {
      return "Internet Archive";
    }

    default: {
      return hostname;
    }
  }
};
