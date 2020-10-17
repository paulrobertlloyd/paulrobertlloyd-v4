/**
 * Get service name from URL
 *
 * @param {String} string URL, i.e. https://twitter.com/paulrobertlloyd/status/1317139864257691650
 * @return {String} Service name, i.e. Twitter
 */
module.exports = string => {
  if (string) {
    string = String(string);
    const {hostname} = new URL(string);
    hostname.replace(/(?:www\.)?/g, '');

    switch (hostname) {
      case ('web.archive.org'):
        return 'Internet Archive';
      case ('twitter.com'):
        return 'Twitter';
      default:
        return hostname;
    }
  }
};
