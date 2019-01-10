/**
 * Generate hostname from a URL
 *
 * @param {String} str URL, i.e. https://www.youtube.com/watch?v=2ed2pifRpc0
 * @return {String} Hostname, i.e. youtube.com
 *
 */
module.exports = function (str) {
  const {hostname} = new URL(str);

  return hostname.replace(/(?:www\.)?/g, '');
};
