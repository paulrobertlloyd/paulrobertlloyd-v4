import { markdownParser } from "../markdown.js";

/**
 * Convert a string of text to Markdown
 * @param {string} string - Markdown
 * @param {string} value - If 'inline', HTML rendered without paragraph tags
 * @returns {string} HTML
 */
export const getMarkdown = (string, value) => {
  if (!string) {
    return "";
  }

  if (value === "inline") {
    return markdownParser.renderInline(string);
  }

  return markdownParser.render(string);
};
