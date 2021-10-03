/**
 * Generate hostname from a URL
 *
 * @param {string} string URL, i.e. https://www.youtube.com/watch?v=2ed2pifRpc0
 * @returns {string} Hostname, i.e. youtube.com
 */
module.exports = string => {
  if (!string) {
    return;
  }

  return (new URL(string)).hostname.replace(/(?:www\.)?/g, '');
};
