const cache = require('@11ty/eleventy-cache-assets');

/**
 * Get endpoint for a given oEmbed provider
 *
 * @param {string} url Embed URL
 * @returns {string} oEmbed endpoint URL
 */
function _getEndpoint (url) {
  let { hostname } = new URL(url);
  const domain = hostname.replace('www.', '')
  const encodedUrl = encodeURIComponent(url)

  switch (domain) {
    case 'vimeo.com':
      return `https://vimeo.com/api/oembed.json?url=${encodedUrl}`
    case 'youtube.com':
    case 'youtu.be':
      return `https://youtube.com/oembed?url=${encodedUrl}&format=json`
  }
}

/**
 * Get oEmbed response
 *
 * @param {string} url Embed URL
 * @param {object} options Embed options
 * @returns {object} oEmbed JSON
 */
module.exports = async function(url, options) {
  try {
    const response = await cache(_getEndpoint(url), {
      duration: options.cacheDuration,
      type: 'json'
    });

    return response
  } catch (error) {
    console.error(error);
    return;
  }
}
