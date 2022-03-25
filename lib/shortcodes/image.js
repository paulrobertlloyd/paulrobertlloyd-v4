const Image = require('@11ty/eleventy-img');

module.exports = async (image, preset, classes) => {
  // Supports `card-square` preset only, for now
  let metadata = await Image('./src/' + image.url, {
    outputDir: './www/images/card-square/',
    urlPath: '/images/card-square/',
    widths: [240, 560, 800]
  });

  let attributes = {
    alt: image.alt || '',
    class: classes,
    sizes: '(max-width: 480px) 33vw, 20%',
    loading: 'lazy',
    decoding: 'async',
  };

  return Image.generateHTML(metadata, attributes);
}
