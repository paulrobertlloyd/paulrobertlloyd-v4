import crypto from "node:crypto";
import { markdownParser } from "../markdown.js";

/**
 * Convert a string into a valid hex colour
 * @param {string} string - String
 * @returns {string} RGB hex code, i.e. "#7f1de4"
 */
export const getColor = (string) => {
  if (!string) {
    return "";
  }

  const hash = crypto.hash("md5", String(string), "hex");
  return `#${hash.slice(0, 6)}`;
};

/**
 * Convert a string of text into Markdown
 * @param {string} string - Markdown
 * @param {string} value - If 'inline', HTML rendered without paragraph tags
 * @returns {string} HTML
 */
export const getMarkdown = (string, value) => {
  if (!string) {
    return "";
  }

  return value === "inline"
    ? markdownParser.renderInline(string)
    : markdownParser.render(string);
};

/**
 * Convert a string of text into a series of tokens
 * @see {@link https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/}
 * @param {string} string - Original text
 * @returns {string} Tokenized text
 */
export const getTokens = (string) => {
  let content = String(string);

  // Convert to lower case
  content = content.toLowerCase();

  // Remove HTML elements
  // Remove words with apostrophes (’)
  // Remove ampersands (&amp;), punctuation and newlines
  // Remove short and less meaningful words
  let tokens = content.replaceAll(
    /<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g,
    " ",
  );
  tokens = tokens.replaceAll(/(?=\S*’)([a-z’]+)/gi, "");
  tokens = tokens.replaceAll(
    /\.\s|,|:|;|‘|“|”|!|\?|\(|\)|\[|]|\/|-|–|§|&amp;|\n/g,
    " ",
  );
  tokens = tokens.replaceAll(
    /\b(the|a|an|and|am|you|i|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi,
    " ",
  );

  // Remove duplicated tokens
  tokens = tokens.split(" ");
  const deduped = [...new Set(tokens)];
  const dedupedString = deduped.join(" ");

  // Remove repeated spaces
  const result = dedupedString.replaceAll(/ {2,}/g, " ").trim();

  return result;
};
