/**
 * Reduce size of a string by removing duplicated words and common short words
 * @see {@link https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/}
 * @param {string} string - Original text
 * @returns {string} Tokenized text
 */
export const tokenize = (string) => {
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
    /\.\s|,|;|‘|“|”|\?|\(|\)|\[|]|\/|-|–|§|&amp;|\n/g,
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
  const result = dedupedString.replaceAll(/ {2,}/g, " ");

  return result;
};
