const markdown = require('./markdown.config.js');

module.exports = function (eleventy) {
  eleventy.setLibrary('md', markdown);

  // Liquid
  eleventy.setLiquidOptions({
    cache: true,
    dynamicPartials: true,
    greedy: false,
    strict_filters: true
  });

  // Template Filters
  eleventy.addFilter('colorify', require('./filters/colorify.js'));
  eleventy.addFilter('contrastify', require('./filters/contrastify.js'));
  eleventy.addFilter('hostname', require('./filters/hostname.js'));
  eleventy.addFilter('includes', require('./filters/includes.js'));
  eleventy.addFilter('jsonify', require('./filters/jsonify.js'));
  eleventy.addFilter('markdownify', require('./filters/markdownify.js'));
  eleventy.addFilter('permalink', require('./filters/permalink.js'));
  eleventy.addFilter('reject', require('./filters/reject.js'));
  eleventy.addFilter('select', require('./filters/select.js'));
  eleventy.addFilter('smartify', require('./filters/smartify.js'));
  eleventy.addFilter('sort_by', require('./filters/sort-by.js'));
  eleventy.addFilter('tokenize', require('./filters/tokenize.js'));

  // Plugins
  eleventy.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));

  // Transforms
  eleventy.addTransform('minify', require('./transforms/minify.js'));

  // Post type collections
  // TODO: Use tags and `setDataDeepMerge` once #194 has been resolved
  // https://github.com/11ty/eleventy/issues/194
  eleventy.addCollection('article', collection => {
    return collection.getFilteredByGlob('**/articles/**/*.md').reverse();
  });

  eleventy.addCollection('bookmark', collection => {
    return collection.getFilteredByGlob('**/bookmarks/**/*.md').reverse();
  });

  eleventy.addCollection('event', collection => {
    return collection.getFilteredByGlob('**/events/**/*.md').reverse();
  });

  eleventy.addCollection('note', collection => {
    return collection.getFilteredByGlob('**/notes/**/*.md').reverse();
  });

  eleventy.addCollection('photo', collection => {
    return collection.getFilteredByGlob('**/photos/**/*.md').reverse();
  });

  eleventy.addCollection('presentation', collection => {
    return collection.getFilteredByGlob('**/presentations/**/*.md').reverse();
  });

  eleventy.addCollection('project', collection => {
    return collection.getFilteredByGlob('**/projects/**/*.md').reverse();
  });

  eleventy.addCollection('post', collection => {
    return collection.getFilteredByGlob('**/+(articles|bookmarks|notes|photos|presentations|projects)/**/*.md').reverse();
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

  // Custom collections
  eleventy.addCollection('attending', collection => {
    return collection.getFilteredByGlob('**/events/**/*.md').reverse().filter(item => {
      const date = new Date(item.data.start).getTime();
      const now = new Date().getTime();
      return (date > now ? item : false);
    });
  });

  eleventy.addCollection('attended', collection => {
    return collection.getFilteredByGlob('**/events/**/*.md').reverse().filter(item => {
      const date = new Date(item.data.start).getTime();
      const now = new Date().getTime();
      return (date < now ? item : false);
    });
  });

  eleventy.addCollection('sitemap', collection => {
    return collection.getFilteredByGlob('**/*.md');
  });

  // Passthrough
  eleventy.addPassthroughCopy('./src/images');
  eleventy.addPassthroughCopy('./src/assets/fonts');
  eleventy.addPassthroughCopy('./src/assets/vectors');

  // Config
  return {
    dir: {
      input: 'src',
      output: 'www'
    },
    templateFormats: ['liquid', 'md'],
    passthroughFileCopy: true
  };
};
