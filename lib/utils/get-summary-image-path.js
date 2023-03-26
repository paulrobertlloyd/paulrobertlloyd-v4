const path = require('node:path');
const eleventyImg = require('@11ty/eleventy-img');
const presets = require('./get-image-presets.js');

/**
 * Get path for cached summary image
 *
 * @param {string} src - Image source
 * @returns {string} File path
 */
module.exports = async src => {
  const metadata = await eleventyImg(path.join('./src/content', src), {
    statsOnly: true,
    formats: presets.summary.formats,
    widths: presets.summary.widths,
    urlFormat: ({src, width}) =>
      `https://kit.paulrobertlloyd.com/image/${src.replace('src/content/', '')}?w=${width}`,
  });

  const {url} = metadata.jpeg[metadata.jpeg.length - 1];

  return url;
};
