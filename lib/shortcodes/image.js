const path = require('node:path');
const Image = require('@11ty/eleventy-img');
const isValidHttpUrl = require('../utils/is-valid-url.js');
const presets = require('../utils/get-image-presets.js')

/**
 * Get HTML `picture` element for cached image
 *
 * @param {object} image Image data
 * @param {string} [preset=default] Sub-directory to save images
 * @returns {string} HTML `picture` element
 */
module.exports = async function (image, preset = 'default', classes) {
  const src = isValidHttpUrl(image.url)
    ? image.url
    : path.join('./src', image.url);

  let metadata = await Image(src, {
    cacheOptions: { duration: '1y' },
    formats: presets[preset].formats || ['webp', 'jpeg'],
    outputDir: `www/images/${preset}`,
    urlPath: `/images/${preset}`,
    widths: presets[preset].widths,
  });


  let attributes = {
    alt: image.alt || '',
    ...(classes && { class: classes }),
    decoding: 'async',
    loading: 'lazy',
    ...(presets[preset].sizes && { sizes: presets[preset].sizes }),
  };

  return Image.generateHTML(metadata, attributes);
}
