const eleventyFetch = require('@11ty/eleventy-fetch');

/**
 * Get endpoint for a given oEmbed provider
 *
 * @param {string} url Embed URL
 * @returns {string} oEmbed endpoint URL
 */
function _getEndpoint(url) {
  const {hostname} = new URL(url);
  const domain = hostname.replace('www.', '');
  const encodedUrl = encodeURIComponent(url);

  switch (domain) {
    case 'vimeo.com': {
      return `https://vimeo.com/api/oembed.json?url=${encodedUrl}`;
    }

    default: {
      return `https://youtube.com/oembed?url=${encodedUrl}&format=json`;
    }
  }
}

/**
 * Get oEmbed response
 *
 * @param {string} url - Embed URL
 * @returns {object} - oEmbed JSON
 */
module.exports = async function (url) {
  try {
    const response = await eleventyFetch(_getEndpoint(url), {
      duration: '1d',
      type: 'json',
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
