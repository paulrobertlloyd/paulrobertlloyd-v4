/**
 * Use query string for pagination link
 * @param {string} content - HTML content
 * @returns {string} Transformed HTML
 */
export function pagination(content) {
  return typeof this.page.outputPath === "string" &&
    this.page.outputPath.endsWith(".html")
    ? content.replaceAll(/\/page\/(\d+)\.html/g, "?page=$1")
    : content;
}
