const image = require('@11ty/eleventy-img');
const presets = require('../../src/data/srcsets.js');

module.exports = async (src, preset = 'default', alt = '') => {
  preset = presets[preset];

  try {
    const stats = await image(src, {
      cacheOptions: {
        duration: '1y',
      },
      outputDir: 'www/images/generated',
      urlPath: '/images/generated',
      widths: preset.widths,
    });

    return image.generateHTML(stats, {
      alt,
      decoding: 'async',
      loading: 'lazy',
      sizes: preset.sizes,
    });
  } catch (error) {
    console.error(error.message);
  }
};
