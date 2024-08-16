/**
 * Remove HTML tags from string
 * @param {string} string - HTML
 * @returns {string} String
 */
export function strip_html(string) {
  return string.replaceAll(
    /<script[\S\s]*?<\/script>|<style[\S\s]*?<\/style>|<.*?>|<!--[\S\s]*?-->/g,
    "",
  );
}
