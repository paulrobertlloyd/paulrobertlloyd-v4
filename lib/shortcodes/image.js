const path = require('node:path');
const eleventyImg = require('@11ty/eleventy-img');

const presets = {
  default: {
    sizes: '100vw',
    widths: [960, 1440],
  },
  card: {
    widths: [960],
  },
  supporting: {
    sizes: '(max-width: 440px) 100vw, 40vw',
    widths: [960],
  },
};

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
    formats: ['auto'],
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
