const process = require('node:process');
const eleventyFetch = require('@11ty/eleventy-fetch');

const {OMDBAPI_TOKEN} = process.env;

/**
 * Get movie information
 * @param {string} url - IMDb URL
 * @returns {object} IMDb movie data
 */
module.exports = async url => {
  const imdbId = url.replace(/https:\/\/www.imdb\.com\/title\/(\w*)\/?/, '$1');
  const json = `https://omdbapi.com/?apikey=${OMDBAPI_TOKEN}&i=${imdbId}`;

  const data = await eleventyFetch(json, {
    duration: '1d',
    type: 'json',
  });

  if (data.Poster) {
    data.Poster = data.Poster.replace('SX300', 'SX600');
  }

  return data;
};
