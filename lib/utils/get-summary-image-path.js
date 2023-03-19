const path = require('node:path');
const eleventyImg = require('@11ty/eleventy-img');
const isValidHttpUrl = require('./is-valid-url.js');
const presets = require('./get-image-presets.js');

/**
 * Get path for cached summary image
 *
 * @param {string} src Image source
 * @returns {string} File path
 */
module.exports = async src => {
  let metadata;
  if (isValidHttpUrl(src)) {
    // Remote image: cache and save resized image
    metadata = await eleventyImg(src, {
      cacheOptions: {duration: '1y'},
      formats: presets.summary.formats,
      outputDir: 'www/image/',
      urlPath: '/image/',
      widths: presets.summary.widths,
    });
  } else {
    // Local image: rewrite URL to use image endpoint
    metadata = await eleventyImg(path.join('./src/content', src), {
      statsOnly: true,
      formats: presets.summary.formats,
      widths: presets.summary.widths,
      urlFormat: ({src, width}) =>
        `https://kit.paulrobertlloyd.com/image/${src.replace('src/content/', '')}?w=${width}`,
    });
  }

  const {url} = metadata.jpeg[metadata.jpeg.length - 1];

  return url;
};
