const markdown = require('../libraries/markdown.js');

/**
 * Convert a string of text to Markdown
 *
 * @param {string} string - Markdown
 * @param {string} value - If 'inline', HTML rendered without paragraph tags
 * @returns {string} HTML
 */
module.exports = (string, value) => {
  if (!string) {
    return '';
  }

  if (value === 'inline') {
    return markdown.renderInline(string);
  }

  return markdown.render(string);
};
