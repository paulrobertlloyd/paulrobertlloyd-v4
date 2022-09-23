const fs = require('node:fs/promises')
const postcss = require('postcss');

module.exports = class {
  data() {
    return {
      permalink: '/assets/styles/app.css',
      eleventyExcludeFromCollections: true,
    };
  }
  async render() {
    const options = {
      from: 'src/assets/styles/app.css',
      plugins: [
        require('postcss-easy-import'),
        require('postcss-logical')({
          dir: 'ltr',
        }),
        require('postcss-custom-media'),
        require('postcss-custom-selectors'),
        require('postcss-media-minmax'),
        require('cssnano')({
          preset: ['default', {
            calc: false, // Prevent postcss-calc from duplicating rules
          }],
        }),
      ],
    };

    const css = await fs.readFile(options.from, 'utf8');
    const result = await postcss(options.plugins).process(css, options);
    return result.css;
  }
};
