const path = require('node:path');
const eleventyImg = require('@11ty/eleventy-img');
const presets = require('../utils/get-image-presets.js');

/**
 * Get HTML `picture` element for cached image
 *
 * @param {object} image - Image data
 * @param {string} [preset=default] - Sub-directory to save images
 * @param {string} classes - Classes
 * @returns {string} HTML `picture` element
 */
module.exports = async function (image, preset = 'default', classes) {
  const metadata = await eleventyImg(path.join('./src/content', image.url), {
    statsOnly: true,
    formats: ['null'],
    widths: presets[preset].widths,
    urlFormat: ({src, width}) => `/${src.replace('src/content/', '')}?tr=w-${width}`,
  });

  return eleventyImg.generateHTML(metadata, {
    alt: image.alt || '',
    ...(classes && {class: classes}),
    decoding: 'async',
    loading: 'lazy',
    ...(presets[preset].sizes && {sizes: presets[preset].sizes}),
  });
};
