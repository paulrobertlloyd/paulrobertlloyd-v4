require('dotenv').config();
const collections = require('./lib/collections/index.js');
const filters = require('./lib/filters/index.js');

module.exports = function (eleventy) {
  // Extensions
  eleventy.addExtension('css', require('./lib/extensions/css.js'));
  eleventy.addExtension('markdown', {key: 'md'});

  // Liquid
  eleventy.setLiquidOptions({
    dateFormat: '%Y-%m-%dT%H:%M:%S.%L%:z',
    globals: {
      app: require('./src/_data/app.js'),
      dates: require('./src/_data/dates.js'),
      navigation: require('./src/_data/navigation.js'),
    },
    layouts: './src/_layouts',
  });

  // Libraries
  eleventy.setLibrary('md', require('./lib/libraries/markdown.js'));

  // Folder data
  eleventy.setDataFileBaseName('_data');

  // Filters
  for (const [name, filter] of Object.entries(filters)) {
    eleventy.addFilter(name, filter);
  }

  // Slugify filter
  const slugifyFilter = eleventy.getFilter('slugify');
  eleventy.addFilter('slugify', string => slugifyFilter(string, {
    customReplacements: [['@', 'at']],
    separator: '_',
  }));

  // Shortcodes
  eleventy.addShortcode('icon', require('./lib/shortcodes/icon.js'));
  eleventy.addShortcode('image', require('./lib/shortcodes/image.js'));

  // Plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Collections
  for (const [name, collection] of Object.entries(collections)) {
    eleventy.addCollection(name, collection);
  }

  // Transforms
  eleventy.addTransform('embed', require('./lib/transforms/embed.js'));

  // Passthrough
  eleventy.addPassthroughCopy('./src/app.pgp');
  eleventy.addPassthroughCopy('./src/robots.txt');
  eleventy.addPassthroughCopy({'./src/content/media': 'media'});
  eleventy.addPassthroughCopy('./src/assets/fonts');
  eleventy.addPassthroughCopy('./src/assets/icons');
  eleventy.addPassthroughCopy('./src/assets/scripts');
  eleventy.addPassthroughCopy('./src/assets/vectors');

  // Watch targets
  eleventy.addWatchTarget('./src/assets/styles');

  // Config
  return {
    dir: {
      input: 'src',
      output: 'www',
      layouts: '_layouts',
    },
    templateFormats: ['css', 'liquid', 'md', '11ty.js'],
  };
};
