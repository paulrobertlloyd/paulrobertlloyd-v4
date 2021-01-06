const TurndownService = require('turndown');
const turndownService = new TurndownService({
  codeBlockStyle: 'fenced',
  emDelimiter: '*',
  linkStyle: 'referenced',
  headingStyle: 'atx'
});

/**
 * Get content of a post as plain text (Markdown)
 *
 * @param {string} item Post data
 * @returns {string} Markdown
 */
module.exports = item => {
  const content = turndownService.turndown(item.templateContent);

  return content;
};
