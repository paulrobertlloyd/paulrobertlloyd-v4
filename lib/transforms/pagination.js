/**
 * Use query string for pagination link
 * @param {string} content - HTML content
 * @returns {string} Transformed HTML
 */
export function pagination(content) {
  if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
    return content.replaceAll(/\/page\/(\d)\.html/g, "?page=$1");
  }

  return content;
}
