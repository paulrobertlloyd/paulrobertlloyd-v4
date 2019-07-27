module.exports = function (eleventy) {
  // Browser Sync
  eleventy.setBrowserSyncConfig(require('./etc/browser-sync.config.js'));

  // Template libraries
  eleventy.setLibrary('md', require('./lib/libraries/markdown.js'));
  eleventy.setLiquidOptions({
    cache: true,
    dynamicPartials: true,
    greedy: false,
    root: ['./src/_includes', './src/_layouts'],
    strictFilters: true
  });

  // Filters
  eleventy.addFilter('colorify', require('./lib/filters/colorify.js'));
  eleventy.addFilter('contrastify', require('./lib/filters/contrastify.js'));
  eleventy.addFilter('hostname', require('./lib/filters/hostname.js'));
  eleventy.addFilter('includes', require('./lib/filters/includes.js'));
  eleventy.addFilter('jsonify', require('./lib/filters/jsonify.js'));
  eleventy.addFilter('markdownify', require('./lib/filters/markdownify.js'));
  eleventy.addFilter('pretty', require('./lib/filters/pretty.js'));
  eleventy.addFilter('reject', require('./lib/filters/reject.js'));
  eleventy.addFilter('select', require('./lib/filters/select.js'));
  eleventy.addFilter('sort_by', require('./lib/filters/sort-by.js'));
  eleventy.addFilter('strip_mentions', require('./lib/filters/strip-mentions.js'));
  eleventy.addFilter('tokenize', require('./lib/filters/tokenize.js'));
  eleventy.addFilter('webmentions_for_url', require('./lib/filters/webmentions-for-url.js'));
  eleventy.addFilter('zeropad', require('./lib/filters/zeropad.js'));

  // Plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Transforms
  eleventy.addTransform('minify', require('./lib/transforms/minify.js'));

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

  eleventy.addCollection('category', collection => {
    function sortByFrequency(array) {
      const frequency = {};

      array.forEach(value => {
        frequency[value] = 0;
      });

      const uniques = array.filter(value => {
        return ++frequency[value] == 1;
      });

      return uniques.sort((a, b) => {
        return frequency[b] - frequency[a];
      });
    }

    let categoryArray = [];
    collection.getAll().forEach(function(item) {
      if('category' in item.data) {
        let categories = item.data.category;
        for (const category of categories) {
          categoryArray.push(category);
        }
      }
    });

    return sortByFrequency(categoryArray)
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
