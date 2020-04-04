const markdown = require('../libraries/markdown.js');

/**
 * Convert a string of text to Markdown
 *
 * @param {String} string Markdown
 * @param {String} value If 'inline', HTML rendered without paragraph tags
 * @return {String} HTML
 */
module.exports = (string, value) => {
  if (string) {
    if (value === 'inline') {
      return markdown.renderInline(string);
    }

    return markdown.render(string);
  }

  return string;
};
