require('dotenv').config();
const process = require('node:process');
const collections = require('./lib/collections/index.js');
const filters = require('./lib/filters/index.js');
const webmanifest = require('./src/app.json');

module.exports = function (eleventy) {
  // Collections
  for (const [name, collection] of Object.entries(collections)) {
    eleventy.addCollection(name, collection);
  }

  // Extensions
  eleventy.addExtension('markdown', {key: 'md'});

  // Filters
  for (const [name, filter] of Object.entries(filters)) {
    eleventy.addFilter(name, filter);
  }

  // Slugify filter
  const slugifyFilter = eleventy.getFilter('slugify');
  eleventy.addFilter('slugify', string => slugifyFilter(string, {
    separator: '_',
  }));

  // Global data
  eleventy.addGlobalData('app', webmanifest);
  eleventy.addGlobalData('app.url', process.env.URL || '');

  // Passthrough
  // On production, save media to images folder, which gets proxied via media
  const mediaDir = process.env.NODE_ENV === 'production' ? 'images' : 'media';
  eleventy.addPassthroughCopy({'./src/content/media': mediaDir});
  eleventy.addPassthroughCopy({'./src/app.json': 'app.webmanifest'});
  eleventy.addPassthroughCopy('./src/app.pgp');
  eleventy.addPassthroughCopy('./src/robots.txt');
  eleventy.addPassthroughCopy('./src/assets');

  // Plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
  eleventy.addPlugin(require('@11tyrocks/eleventy-plugin-lightningcss'));

  // Shortcodes
  eleventy.addShortcode('icon', require('./lib/shortcodes/icon.js'));
  eleventy.addShortcode('image', require('./lib/shortcodes/image.js'));

  // Transforms
  eleventy.addTransform('embed', require('./lib/transforms/embed.js'));

  // Folder data
  eleventy.setDataFileBaseName('_data');

  // Libraries
  eleventy.setLibrary('md', require('./lib/libraries/markdown.js'));

  // Liquid
  eleventy.setLiquidOptions({
    dateFormat: '%Y-%m-%dT%H:%M:%S.%L%:z',
    globals: {
      app: webmanifest,
      dates: require('./src/_data/dates.js'),
      navigation: require('./src/_data/navigation.js'),
    },
  });

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
