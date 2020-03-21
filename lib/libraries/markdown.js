const markdown = require('markdown-it');
const slugify = require('@sindresorhus/slugify');

module.exports = (() => {
  // Convert string to Twitter URL
  function parseURL(string) {
    return `https://twitter.com/@${string}`;
  }

  const slug = string => slugify(string, {
    separator: '_'
  });

  const options = Object.assign({
    html: true,
    breaks: true,
    typographer: true
  });

  const plugins = [
    require('markdown-it-abbr'),
    [require('markdown-it-anchor'), {
      permalink: false,
      slugify: slug
    }],
    require('markdown-it-attrs'),
    require('markdown-it-deflist'),
    require('markdown-it-footnote'),
    [require('markdown-it-mentions'), {
      parseURL
    }],
    [require('markdown-it-table-of-contents'), {
      listType: 'ol',
      slugify: slug
    }]
  ];

  const parser = markdown(options);

  if (plugins) {
    plugins.forEach(plugin => {
      if (Array.isArray(plugin)) {
        // Allow array of options to be passed.
        parser.use(...plugin);
      } else {
        parser.use(plugin);
      }
    });
  }

  return parser;
})();
