const markdown = require('markdown-it');
const uslug = require('uslug');

module.exports = (() => {
  // Convert string to Twitter URL
  function parseURL(str) {
    return `https://twitter.com/@${str}`;
  }

  const uslugify = s => uslug(s);

  const opts = Object.assign({
    html: true,
    breaks: true,
    typographer: true
  });

  const plugins = [
    require('markdown-it-abbr'),
    [require('markdown-it-anchor'), {
      permalink: false,
      slugify: uslugify
    }],
    require('markdown-it-attrs'),
    require('markdown-it-deflist'),
    require('markdown-it-footnote'),
    [require('markdown-it-mentions'), {
      parseURL
    }],
    [require('markdown-it-table-of-contents'), {
      listType: 'ol',
      slugify: uslugify
    }]
  ];

  const parser = markdown(opts);

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
