import { getJamHtml } from "../shortcodes/jam.js";

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
    content.push(getJamHtml(jamOf));
  }

  content.push(item.content);

  // If article post, prompt readers to respond by email
  if (type === "article") {
    content.push(
      `<hr><p><a href="mailto:${author.email}?subject=Reply: ${title}">Reply via email</a></p>`,
    );
  }

  // Convert relative URLs to absolute URLs
  return this.transformWithHtmlBase(content.join(""), app.url, item.url);
}
