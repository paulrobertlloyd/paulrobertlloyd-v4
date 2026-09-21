import { getJamHtml } from "../shortcodes/jam.js";
import { getPhotoHtml } from "../shortcodes/photo.js";

/**
 * Get content of a post as HTML (suitable for RSS feed readers)
 * @this {object}
 * @param {string} item - Post data
 * @returns {string} Decorate HTML text
 */
export async function getFeedHtml(item) {
  const { app, author, jamOf, photo, title, type } = item.data;
  let content = [];

  // If jam, show a link to embed
  if (jamOf) {
    content.push(getJamHtml(jamOf));
  }

  // If drawing, lead with images
  if (type === "drawing") {
    content.push(getPhotoHtml(photo));
  }

  content.push(item.content);

  // If photo, follow with images
  if (type === "photo") {
    content.push(getPhotoHtml(photo));
  }

  // If article, prompt readers to respond by email
  else if (type === "article") {
    content.push(
      `<hr><p><a href="mailto:${author.email}?subject=Reply: ${title}">Reply via email</a></p>`,
    );
  }

  // Convert relative URLs to absolute URLs
  return this.transformWithHtmlBase(content.join(""), app.url, item.url);
}
