require('dotenv').config();

module.exports = function (eleventy) {
  // Extensions
  eleventy.addExtension('css', require('./lib/extensions/css.js'));

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
  eleventy.addFilter('absolute_url', require('@11ty/eleventy-plugin-rss').absoluteUrl);
  eleventy.addFilter('color', require('./lib/filters/color.js'));
  eleventy.addFilter('contrast_with', require('./lib/filters/contrast-with.js'));
  eleventy.addFilter('date_with_time_zone', require('./lib/filters/date-with-time-zone.js'));
  eleventy.addFilter('excludes', require('./lib/filters/excludes.js'));
  eleventy.addFilter('hostname', require('./lib/filters/hostname.js'));
  eleventy.addFilter('includes', require('./lib/filters/includes.js'));
  eleventy.addFilter('map_url', require('./lib/filters/map-url.js'));
  eleventy.addFilter('markdown', require('./lib/filters/markdown.js'));
  eleventy.addFilter('percentage_of', require('./lib/filters/percentage-of.js'));
  eleventy.addFilter('pluralise', require('./lib/filters/pluralise.js'));
  eleventy.addFilter('sum', require('./lib/filters/sum.js'));
  eleventy.addFilter('syndication_target', require('./lib/filters/syndication-target.js'));
  eleventy.addFilter('template_content_to_feed_html', require('./lib/filters/template-content-to-feed-html.js'));
  eleventy.addFilter('tokenize', require('./lib/filters/tokenize.js'));

  const slugifyFilter = eleventy.getFilter('slugify');
  eleventy.addFilter('slugify', string => slugifyFilter(string, {
    customReplacements: [
      ['@', 'at'],
    ],
    separator: '_',
  }));

  // Shortcodes
  eleventy.addShortcode('image', require('./lib/shortcodes/image.js'));
  eleventy.addShortcode('jsonFeed', require('./lib/shortcodes/json-feed.js'));

  // Plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Collections
  eleventy.addCollection('attending', require('./lib/collections/attending.js'));
  eleventy.addCollection('attended', require('./lib/collections/attended.js'));
  eleventy.addCollection('category', require('./lib/collections/category.js'));
  eleventy.addCollection('photo', require('./lib/collections/photo.js'));
  eleventy.addCollection('presented', require('./lib/collections/presented.js'));
  eleventy.addCollection('public', require('./lib/collections/public.js'));
  eleventy.addCollection('syndicate', require('./lib/collections/syndicate.js'));

  // Transforms
  eleventy.addTransform('embed', require('./lib/transforms/embed.js'));

  // Passthrough
  eleventy.addPassthroughCopy('./src/key.txt');
  eleventy.addPassthroughCopy('./src/**/*.(jpg|png|svg|ico)');
  eleventy.addPassthroughCopy('./src/assets/fonts');
  eleventy.addPassthroughCopy('./src/assets/scripts');

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
