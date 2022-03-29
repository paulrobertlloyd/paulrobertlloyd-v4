const path = require('node:path');
const Image = require('@11ty/eleventy-img');
const isValidHttpUrl = require('../utils/is-valid-url.js');
const presets = require('../utils/get-image-presets.js')

/**
 * Get path for cached image
 *
 * @param {string} src Remote image source URL
 * @param {string} fileSlug Image file slug
 * @param {string} preset Sub-directory to save images
 * @returns {string} File path
 */
module.exports = async (src, preset) => {
  src = isValidHttpUrl(src) ? src : path.join('./src', src);

  try {
    const metadata = await Image(src, {
      cacheOptions: { duration: '1y' },
      formats: presets[preset].formats || ['webp', 'jpeg'],
      outputDir: `www/images/${preset}`,
      urlPath: `/images/${preset}`,
      widths: presets[preset].widths,
    });

    const {url} = metadata.jpeg[metadata.jpeg.length - 1];

    return url;
  } catch (error) {
    console.error(error.message);
  }
};
