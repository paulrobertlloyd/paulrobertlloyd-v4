module.exports = function (eleventy) {
  // Browser Sync
  eleventy.setBrowserSyncConfig(require('./etc/browser-sync.config.js'));

  // Template libraries
  // Use own Liquid instance until 11ty upgrades to latest version
  // https://github.com/11ty/eleventy/issues/469
  eleventy.setLibrary('liquid', require('./lib/libraries/liquid.js'));
  eleventy.setLibrary('md', require('./lib/libraries/markdown.js'));

  // Filters
  eleventy.addFilter('colorify', require('./lib/filters/colorify.js'));
  eleventy.addFilter('contrastify', require('./lib/filters/contrastify.js'));
  eleventy.addFilter('decodePluscode', require('./lib/filters/decode-pluscode.js'));
  eleventy.addFilter('hostname', require('./lib/filters/hostname.js'));
  eleventy.addFilter('includes', require('./lib/filters/includes.js'));
  eleventy.addFilter('jsonify', require('./lib/filters/jsonify.js'));
  eleventy.addFilter('markdownify', require('./lib/filters/markdownify.js'));
  eleventy.addFilter('pretty', require('./lib/filters/pretty.js'));
  eleventy.addFilter('related', require('./lib/filters/related.js'));
  eleventy.addFilter('sort_by', require('./lib/filters/sort-by.js'));
  eleventy.addFilter('strip_mentions', require('./lib/filters/strip-mentions.js'));
  eleventy.addFilter('tokenize', require('./lib/filters/tokenize.js'));
  eleventy.addFilter('webmentions_for_url', require('./lib/filters/webmentions-for-url.js'));

  // Plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Collections
  eleventy.addCollection('attending', require('./lib/collections/attending.js'));
  eleventy.addCollection('attended', require('./lib/collections/attended.js'));
  eleventy.addCollection('category', require('./lib/collections/category.js'));
  eleventy.addCollection('photo', require('./lib/collections/photo.js'));
  eleventy.addCollection('post', require('./lib/collections/post.js'));
  eleventy.addCollection('sitemap', require('./lib/collections/sitemap.js'));

  // Passthrough
  eleventy.addPassthroughCopy('./src/key.txt');
  eleventy.addPassthroughCopy('./src/images');
  eleventy.addPassthroughCopy('./src/assets/fonts');
  eleventy.addPassthroughCopy('./src/assets/vectors');

  // Enable data deep merge
  eleventy.setDataDeepMerge(true);

  // Config
  return {
    dir: {
      input: 'src',
      output: 'www',
      layouts: '_layouts'
    },
    templateFormats: ['liquid', 'md'],
    passthroughFileCopy: true
  };
};
