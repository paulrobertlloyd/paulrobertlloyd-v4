/**
 * Reduce size of a string by removing duplicated words and common short words
 * https://www.hawksworx.com/blog/adding-search-to-a-jamstack-site/
 *
 * @param {String} str Original text
 * @return {String} Tokenized text
 *
 */
module.exports = function (str) {
  let content = String(str);

  // Convert to lower case
  content = content.toLowerCase();

  // Remove HTML elements
  // Remove words with apostophies (’)
  // Remove ampersands (&amp;), punctuation and newlines
  // Remove short and less meaningful words
  let tokens = content.replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, ' ');
  tokens = tokens.replace(/(?=\S*[’])([a-zA-Z’]+)/gi, '');
  tokens = tokens.replace(/\.\s|,|;|‘|“|”|\?|\(|\)|\[|\]|\/|-|–|§|&amp;|\n/g, ' ');
  tokens = tokens.replace(/\b(the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi, ' ');

  // Remove duplicated tokens
  tokens = tokens.split(' ');
  const deduped = [...(new Set(tokens))];
  const dedupedStr = deduped.join(' ');

  // Remove repeated spaces
  const result = dedupedStr.replace(/[ ]{2,}/g, ' ');

  return result;
};
