const highlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');

module.exports = function (eleventy) {
  // Convert string to Twitter URL
  function parseURL(str) {
    return `https://twitter.com/@${str}`;
  }

  // Markdown
  const markdown = require('markdown-it')({
    html: true,
    breaks: true,
    typographer: true
  })
    .use(require('markdown-it-abbr'))
    .use(require('markdown-it-anchor'), {
      permalink: true,
      permalinkClass: 'permalink',
      permalinkSymbol: '§'
    })
    .use(require('markdown-it-attrs'))
    .use(require('markdown-it-deflist'))
    .use(require('markdown-it-footnote'))
    .use(require('markdown-it-mentions'), {
      parseURL
    })
    .use(require('markdown-it-table-of-contents'));

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
  eleventy.addFilter('permalink', require('./filters/permalink.js'));
  eleventy.addFilter('reject', require('./filters/reject.js'));
  eleventy.addFilter('select', require('./filters/select.js'));
  eleventy.addFilter('smartify', require('./filters/smartify.js'));

  eleventy.addFilter('markdownify', str => {
    return markdown.render(str);
  });

  eleventy.addFilter('markdownify_inline', str => {
    return markdown.renderInline(str);
  });

  // Plugins
  eleventy.addPlugin(highlight);

  // Post type collections
  // TODO: Replace globs with tags once #147 is resolved
  // https://github.com/11ty/eleventy/issues/147
  eleventy.addCollection('article', collection => {
    return collection.getFilteredByGlob('**/articles/**/*.md').reverse();
  });

  eleventy.addCollection('bookmark', collection => {
    return collection.getFilteredByGlob('**/bookmarks/**/*.md').reverse();
  });

  eleventy.addCollection('event', collection => {
    return collection.getFilteredByGlob('**/events/**/*.md').reverse();
  });

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

  // Archive collections
  eleventy.addCollection('sitemap', collection => {
    return collection.getFilteredByGlob('**/*.md').sort((a, b) => {
      const p1 = a.data.priority;
      const p2 = b.data.priority;
      const u1 = a.url;
      const u2 = b.url;

      if (p1 < p2) {
        return 1;
      }
      if (p1 > p2) {
        return -1;
      }
      if (u1 < u2) {
        return -1;
      }
      if (u1 > u2) {
        return 1;
      }
      return 0;
    });
  });

  eleventy.addCollection('source', collection => {
    return collection.getFilteredByGlob('**/sources/**/*.md').sort((a, b) => {
      if (a.data.title < b.data.title) {
        return -1;
      }
      if (a.data.title > b.data.title) {
        return 1;
      }
      return 0;
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

  // Transforms
  eleventy.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath && outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true
      });
      return minified;
    }
    return content;
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
