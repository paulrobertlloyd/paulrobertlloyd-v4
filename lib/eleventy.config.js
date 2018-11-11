const color = require('color');
const stringToColor = require('string-to-color');
const highlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');
const typogr = require('typogr');

module.exports = function (eleventy) {
  // Convert string to Twitter URL
  function parseURL(str) {
    return `https://twitter.com/@${str}`;
  }

  // Generate accessible colour
  // https://medium.com/confrere/e735c3f2f45e
  function getValidatedColor({
    colorToChange,
    colorToValidate = color('white'),
    minimumContrastRatio = 5,
    mixingColor,
    mixingAmount,
    tries = 0,
    maxTries = 8
  }) {
    const newColor = colorToChange.mix(mixingColor, mixingAmount);
    if (
      newColor.contrast(colorToValidate) < minimumContrastRatio &&
      tries < maxTries
    ) {
      return getValidatedColor({
        colorToChange: newColor,
        mixingColor,
        mixingAmount: 0.1,
        tries: ++tries
      });
    }
    return newColor;
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
    .use(require('markdown-it-mentions'), {parseURL})
    .use(require('markdown-it-table-of-contents'));

  eleventy.setLibrary('md', markdown);

  // Liquid
  eleventy.setLiquidOptions({
    cache: true,
    dynamicPartials: true,
    greedy: false,
    strict_filters: true
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

  // Template Filters
  eleventy.addFilter('colorify', str => {
    const inputColor = stringToColor(str);

    return color(inputColor).hex();
  });

  eleventy.addFilter('contrastify', (str, value) => {
    const validColor = getValidatedColor({
      colorToChange: color(str),
      mixingColor: color(value),
      mixingAmount: 0.33
    });

    return validColor.hex();
  });

  eleventy.addFilter('integer', str => {
    return Number(str);
  });

  eleventy.addFilter('jsonify', str => {
    return JSON.stringify(str);
  });

  eleventy.addFilter('markdownify', str => {
    return markdown.render(str);
  });

  eleventy.addFilter('markdownify_inline', str => {
    return markdown.renderInline(str);
  });

  eleventy.addFilter('permalink', str => {
    return str.replace(/(?:index)?\.html/g, '');
  });

  eleventy.addFilter('prettyurl', str => {
    const {hostname} = new URL(str);
    return hostname.replace(/(?:www\.)?/g, '');
  });

  eleventy.addFilter('smartify', str => {
    return typogr(str).smartypants();
  });

  eleventy.addFilter('select', (arr, key, value) => {
    return arr.filter(item => {
      const keys = key.split('.');
      const reduce = keys.reduce((object, key) => {
        return object[key];
      }, item);

      return (reduce === value ? item : false);
    });
  });

  eleventy.addFilter('includes', (arr, key, value) => {
    return arr.filter(item => {
      const keys = key.split('.');
      const reduce = keys.reduce((object, key) => {
        return object[key];
      }, item);
      const str = String(reduce);

      return (str.includes(value) ? item : false);
    });
  });

  eleventy.addFilter('reject', (arr, key, value) => {
    return arr.filter(item => {
      const keys = key.split('.');
      const reduce = keys.reduce((object, key) => {
        return object[key];
      }, item);

      return (reduce === value ? false : item);
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
