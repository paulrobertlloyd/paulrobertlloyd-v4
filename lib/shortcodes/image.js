const path = require('node:path');
const process = require('node:process');
const eleventyImg = require('@11ty/eleventy-img');
const isValidHttpUrl = require('../utils/is-valid-url.js');
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
  if (!image) {
    image = '/assets/vectors/avatar.svg';
  }

  const url = image.url || image;

  let metadata;
  if (isValidHttpUrl(url)) {
    // Remote image: cache and save resized image
    metadata = await eleventyImg(url, {
      cacheOptions: {duration: '1y'},
      formats: presets[preset].formats,
      outputDir: 'www/image/',
      urlPath: '/image/',
      widths: presets[preset].widths,
    });
  } else {
    // Local image: rewrite URL to use image endpoint
    metadata = await eleventyImg(path.join('./src', url), {
      statsOnly: true,
      formats: ['null'],
      widths: presets[preset].widths,
      urlFormat: ({src, width}) =>
        `${process.env.IMAGE_ENDPOINT}/${src.replace('src/', '')}?w=${width}`,
    });
  }

  return eleventyImg.generateHTML(metadata, {
    alt: image.alt || '',
    ...(classes && {class: classes}),
    decoding: 'async',
    loading: 'lazy',
    ...(presets[preset].sizes && {sizes: presets[preset].sizes}),
  });
};
