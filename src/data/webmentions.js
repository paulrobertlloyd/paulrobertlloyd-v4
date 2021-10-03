const cache = require('@11ty/eleventy-cache-assets');

module.exports = async function () {
  const ENDPOINT = 'https://webmention.io/api/mentions.jf2';
  const TOKEN = process.env.WEBMENTION_IO_TOKEN;

  const url = `${ENDPOINT}?token=${TOKEN}&per-page=999`;

  try {
    const webmentions = await cache(url, {
      duration: '1d',
      type: 'json',
    });

    return webmentions;
  } catch (error) {
    console.warn(error.message);
    return {
      children: [],
    };
  }
};
