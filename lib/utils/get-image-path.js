const image = require('@11ty/eleventy-img');

/**
 * Get path for cached image
 *
 * @param {string} src Remote image source URL
 * @param {string} fileSlug Image file slug
 * @param {string} imageDir Sub-directory to save images
 * @returns {string} File path
 */
module.exports = async (src, fileSlug, imageDir) => {
  try {
    const metadata = await image(src, {
      cacheOptions: {
        duration: '1y',
      },
      filenameFormat: () => `${fileSlug}.jpg`,
      formats: ['jpg'],
      outputDir: `www/images/${imageDir}`,
      urlPath: `/images/${imageDir}`,
    });

    const {url} = metadata.jpeg[metadata.jpeg.length - 1];

    return url;
  } catch (error) {
    console.error(error.message);
  }
};
