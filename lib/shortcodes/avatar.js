const Image = require('@11ty/eleventy-img');

module.exports = async (src, alt = '', width = 96) => {
  if (src) {
    src = `${src}?s=${width}&d=identicon`

    try {
      const metadata = await Image(src, {
        cacheOptions: {
          duration: '1y',
        },
        filenameFormat: (id, src, width, format, options) => {
          format = format.replace('jpeg', 'jpg');
          return `${id}_${width}.${format}`;
        },
        formats: ['jpg'],
        outputDir: 'www/images/avatars',
        urlPath: '/images/avatars',
        widths: [width],
      });

      data = metadata.jpeg[metadata.jpeg.length - 1];
    } catch (error) {
      console.error(error.message);
      return;
    }
  } else {
    data = {
      height: 48,
      width: 48,
      url: '/assets/vectors/avatar.svg',
    }
  }

  return `<img class="avatar | u-photo" src="${data.url}" alt="${alt}" height="${data.height}" width="${data.width}" decoding="async" loading="lazy">`;
}
