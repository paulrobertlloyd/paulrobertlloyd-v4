module.exports = function (eleventy) {
  // Helpers
  eleventy.setLibrary('md', require('./markdown.config.js'));
  eleventy.setBrowserSyncConfig(require('./browser-sync.config.js'));
  eleventy.setLiquidOptions({
    cache: true,
    dynamicPartials: true,
    greedy: false,
    root: ['./src/_includes', './src/_layouts'],
    strictFilters: true
  });

  // Filters
  eleventy.addFilter('colorify', require('./filters/colorify.js'));
  eleventy.addFilter('contrastify', require('./filters/contrastify.js'));
  eleventy.addFilter('hostname', require('./filters/hostname.js'));
  eleventy.addFilter('includes', require('./filters/includes.js'));
  eleventy.addFilter('jsonify', require('./filters/jsonify.js'));
  eleventy.addFilter('markdownify', require('./filters/markdownify.js'));
  eleventy.addFilter('pretty', require('./filters/pretty.js'));
  eleventy.addFilter('reject', require('./filters/reject.js'));
  eleventy.addFilter('select', require('./filters/select.js'));
  eleventy.addFilter('sort_by', require('./filters/sort-by.js'));
  eleventy.addFilter('strip_mentions', require('./filters/strip-mentions.js'));
  eleventy.addFilter('tokenize', require('./filters/tokenize.js'));
  eleventy.addFilter('webmentions_for_url', require('./filters/webmentions-for-url.js'));
  eleventy.addFilter('zeropad', require('./filters/zeropad.js'));

  // Plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Transforms
  eleventy.addTransform('minify', require('./transforms/minify.js'));

  // Post type collections
  // Adding `reversed` Liquid option to `collections.post` doesn’t collate all
  // posts in date decending order, so need to collate and reverse here instead.
  // Setting a default sort order may resolve this. See:
  // https://github.com/11ty/eleventy/issues/367
  eleventy.addCollection('post', collection => {
    return collection.getFilteredByGlob('**/+(articles|bookmarks|notes|photos|presentations|projects)/**/*.md').reverse();
  });

  eleventy.addCollection('sitemap', collection => {
    return collection.getFilteredByGlob('**/*.md');
  });

  eleventy.addCollection('attending', collection => {
    return collection.getFilteredByGlob('**/events/**/*.md').filter(item => {
      const date = new Date(item.data.start).getTime();
      const now = new Date().getTime();
      return (date > now ? item : false);
    });
  });

  eleventy.addCollection('attended', collection => {
    return collection.getFilteredByGlob('**/events/**/*.md').filter(item => {
      const date = new Date(item.data.start).getTime();
      const now = new Date().getTime();
      return (date < now ? item : false);
    });
  });

  eleventy.addCollection('venue', collection => {
    return collection.getFilteredByGlob('**/venues/**/*.md').sort((a, b) => {
      if (a.data.title < b.data.title) {
        return -1;
      }

      if (a.data.title > b.data.title) {
        return 1;
      }

      return 0;
    });
  });

  // Passthrough
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
