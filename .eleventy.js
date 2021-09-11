require('dotenv').config();

module.exports = function (eleventy) {
  // Browser Sync
  eleventy.setBrowserSyncConfig(require('./etc/browser-sync.config.js'));

  // Liquid
  eleventy.setLiquidOptions({
    cache: true,
    dynamicPartials: true,
    globals: {
      app: require('./src/data/app'),
      dates: require('./src/data/dates'),
      navigation: require('./src/data/navigation'),
      places: require('./src/data/places')(),
      srcsets: require('./src/data/srcsets')
    }
  });

  // Filters
  eleventy.addFilter('absolute_url', require('@11ty/eleventy-plugin-rss').absoluteUrl);
  eleventy.addFilter('color', require('./lib/filters/color.js'));
  eleventy.addFilter('contrast_with', require('./lib/filters/contrast-with.js'));
  eleventy.addFilter('date', require('./lib/filters/date.js'));
  eleventy.addFilter('excludes', require('./lib/filters/excludes.js'));
  eleventy.addFilter('hostname', require('./lib/filters/hostname.js'));
  eleventy.addFilter('includes', require('./lib/filters/includes.js'));
  eleventy.addFilter('markdown', require('./lib/filters/markdown.js'));
  eleventy.addFilter('percentage_of', require('./lib/filters/percentage-of.js'));
  eleventy.addFilter('pluscode_to_geo', require('./lib/filters/pluscode-to-geo.js'));
  eleventy.addFilter('slugify', require('./lib/filters/slugify.js'));
  eleventy.addFilter('sum', require('./lib/filters/sum.js'));
  eleventy.addFilter('syndication_target', require('./lib/filters/syndication-target.js'));
  eleventy.addFilter('template_content_to_feed_html', require('./lib/filters/template-content-to-feed-html.js'));
  eleventy.addFilter('tokenize', require('./lib/filters/tokenize.js'));

  // Shortcodes
  eleventy.addShortcode('embed', require('./lib/shortcodes/embed.js'));
  eleventy.addShortcode('icon', require('./lib/shortcodes/icon.js'));
  eleventy.addShortcode('jf2Feed', require('./lib/shortcodes/jf2-feed.js'));
  eleventy.addShortcode('jsonFeed', require('./lib/shortcodes/json-feed.js'));

  // Libraries
  eleventy.setLibrary('md', require('./lib/libraries/markdown.js'));

  // Plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Collections
  eleventy.addCollection('attending', require('./lib/collections/attending.js'));
  eleventy.addCollection('attended', require('./lib/collections/attended.js'));
  eleventy.addCollection('category', require('./lib/collections/category.js'));
  eleventy.addCollection('photo', require('./lib/collections/photo.js'));
  eleventy.addCollection('post', require('./lib/collections/post.js'));

  // Passthrough
  eleventy.addPassthroughCopy('./src/key.txt');
  eleventy.addPassthroughCopy('./src/images');
  eleventy.addPassthroughCopy('./src/assets/fonts');
  eleventy.addPassthroughCopy('./src/assets/vectors');

  // Config
  return {
    dir: {
      input: 'src',
      output: 'www',
      includes: 'includes',
      layouts: 'layouts',
      data: 'data'
    },
    templateFormats: ['liquid', 'md']
  };
};
