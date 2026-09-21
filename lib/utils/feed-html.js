/**
 * Get content of a post as HTML (suitable for RSS feed readers)
 * @this {object}
 * @param {string} item - Post data
 * @returns {string} Decorate HTML text
 */
export async function getFeedHtml(item) {
  const { app, author, jamOf, title, type } = item.data;
  let content = [];

  // If post is a jam, show a link to embed
  if (jamOf) {
    content.push(
      `<p>♫ <a class="u-jam-of" href="${jamOf.url}">${jamOf.name} by ${jamOf.author}</a></p>`,
    );
  }

  // Remove line breaks from template content
  content.push(item.content.replaceAll("\n", ""));

  // If article post, prompt readers to respond by email
  if (type === "article") {
    content.push(
      `<hr><p><a href="mailto:${author.email}?subject=Reply: ${title}">Reply via email</a></p>`,
    );
  }

  // Convert relative URLs to absolute URLs
  return this.transformWithHtmlBase(content.join(""), app.url, item.url);
}
