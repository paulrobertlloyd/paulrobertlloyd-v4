const path = require('node:path');
const Image = require('@11ty/eleventy-img');
const isValidHttpUrl = require('./is-valid-url.js');
const presets = require('./get-image-presets.js')

/**
 * Get path for cached summary image
 *
 * @param {string} src Image source
 * @returns {string} File path
 */
module.exports = async (src) => {
  src = isValidHttpUrl(src) ? src : path.join('./src', src);

  const metadata = await Image(src, {
    cacheOptions: { duration: '1y' },
    formats: presets.summary.formats,
    outputDir: 'www/images/',
    urlPath: '/images/',
    widths: presets.summary.widths,
  });

  const {url} = metadata.jpeg[metadata.jpeg.length - 1];

  return url;
};
