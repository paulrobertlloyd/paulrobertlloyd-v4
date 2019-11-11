const markdown = require('../libraries/markdown.js');

/**
 * Convert a string of text to Markdown
 *
 * @param {String} str Markdown
 * @param {String} value If 'inline', HTML rendered without paragraph tags
 * @return {String} HTML
 *
 */
module.exports = (str, value) => {
  if (str) {
    if (value === 'inline') {
      return markdown.renderInline(str);
    }

    return markdown.render(str);
  }

  return str;
};
