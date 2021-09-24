const Image = require('@11ty/eleventy-img');
const presets = require('../../src/data/srcsets');

module.exports = async (image, preset = 'default', alt = '') => {
  preset = presets[preset]

  try {
    const stats = await Image(image, {
      cacheOptions: {
        duration: '1y',
      },
      outputDir: 'www/images/generated',
      urlPath: '/images/generated',
      widths: preset.widths,
    });

    return Image.generateHTML(stats, {
      alt,
      decoding: 'async',
      loading: 'lazy',
      sizes: preset.sizes,
    });
  } catch (error) {
    console.error(error.message);
    return;
  }
}
