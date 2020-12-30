/**
 * Generate hostname from a URL
 *
 * @param {String} string URL, i.e. https://www.youtube.com/watch?v=2ed2pifRpc0
 * @return {String} Hostname, i.e. youtube.com
 */
module.exports = string => {
  if (string) {
    return (new URL(string)).hostname.replace(/(?:www\.)?/g, '');
  }
};
