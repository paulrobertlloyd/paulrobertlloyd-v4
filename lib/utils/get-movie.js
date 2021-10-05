const cache = require('@11ty/eleventy-cache-assets');

/**
 * Get movie information
 *
 * @param {string} url IMDb URL
 * @returns {object} IMDb movie data
 */
module.exports = async url => {
  const imdbId = url.replace(/https:\/\/www.imdb\.com\/title\/(\w*)\/?/, '$1');
  const json = `https://omdbapi.com/?apikey=${process.env.OMDBAPI_TOKEN}&i=${imdbId}`;

  const data = await cache(json, {
    duration: '1d',
    type: 'json',
  });

  data.Poster.replace('SX300', 'SX960');

  return data;
};
