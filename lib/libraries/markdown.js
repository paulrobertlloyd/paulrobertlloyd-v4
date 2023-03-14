const markdown = require('markdown-it');

module.exports = (() => {
  /**
   * Convert string to Twitter URL
   *
   * @param {string} string e.g. 'paulrobertlloyd'
   * @returns {URL} e.g. 'https://twitter.com/@paulrobertlloyd'
   */
  function parseURL(string) {
    return `https://twitter.com/@${string}`;
  }

  const options = {
    html: true,
    breaks: true,
    typographer: true,
  };

  const plugins = [
    require('./map.js'),
    require('markdown-it-abbr'),
    [require('markdown-it-anchor'), {
      permalink: false,
      tabIndex: false,
    }],
    [require('markdown-it-attribution'), {
      classNameContainer: false,
      classNameAttribution: false,
    }],
    require('markdown-it-attrs'),
    require('markdown-it-bracketed-spans'),
    require('markdown-it-deflist'),
    require('markdown-it-footnote'),
    [require('markdown-it-image-figures'), {
      async: true,
      lazy: true,
      figcaption: true,
    }],
    [require('markdown-it-mentions'), {
      parseURL,
    }],
    [require('markdown-it-table-of-contents'), {
      listType: 'ol',
    }],
  ];

  const parser = markdown(options);

  if (plugins) {
    for (const plugin of plugins) {
      if (Array.isArray(plugin)) {
        // Allow array of options to be passed.
        parser.use(...plugin);
      } else {
        parser.use(plugin);
      }
    }
  }

  parser.renderer.rules.footnote_caption = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString();

    if (tokens[idx].meta.subId > 0) {
      n += ':' + tokens[idx].meta.subId;
    }

    return n;
  };

  parser.renderer.rules.footnote_block_open = () => (
    '<hr>\n'
    + '<h2 class="visually-hidden" id="footnotes">Footnotes</h2>\n'
    + '<ol class="footnotes">\n'
  );

  parser.renderer.rules.footnote_block_close = () => (
    '</ol>\n'
  );

  return parser;
})();
