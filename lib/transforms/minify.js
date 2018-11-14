const htmlmin = require('html-minifier');

/**
 * Convert a string of text to Markdown
 * https://medium.com/confrere/e735c3f2f45e
 *
 * @param {String} content Rendered content
 * @param {String} outputPath Path to rendered file
 * @return {String} Minified HTML
 *
 */
module.exports = function (content, outputPath) {
  if (outputPath && outputPath.endsWith('.html')) {
    const minified = htmlmin.minify(content, {
      collapseWhitespace: true,
      removeComments: true,
      useShortDoctype: true
    });
    return minified;
  }

  return content;
};
