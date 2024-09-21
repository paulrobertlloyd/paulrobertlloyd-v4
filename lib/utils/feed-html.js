import absoluteUrl from "@11ty/eleventy-plugin-rss/src/absoluteUrl.js";
import convertHtmlToAbsoluteUrls from "@11ty/eleventy-plugin-rss/src/htmlToAbsoluteUrls.js";

/**
 * Get content of a post as HTML (suitable for RSS feed readers)
 * @param {string} item - Post data
 * @returns {string} Decorate HTML text
 */
export const getFeedHtml = async (item) => {
  const { app, jamOf, photo, pkg, title, type } = item.data;
  let content = "";

  // If post is a jam, show a link to embed
  if (jamOf) {
    content += `<p>♫ <a class="u-jam-of" href="${jamOf.url}">${jamOf.name} by ${jamOf.author}</a></p>`;
  }

  // Remove line breaks from template content
  content += item.content.replaceAll("\n", "");

  // If photo post, present each photo within a figure
  if (type === "photo") {
    for (const item of photo) {
      content += `<figure><img src="${absoluteUrl(item.url, app.url)}" alt="${
        item.alt
      }"></figure>`;
    }
  }

  // If post has a title, prompt readers to respond by email
  if (title) {
    content += `<hr><p><a href="mailto:${pkg.author.email}?subject=Reply: ${title}">Reply via email</a></p>`;
  }

  // Convert relative URLs to absolute URLs
  const absolutePostUrl = app.url ? new URL(item.url, app.url).href : item.url;
  content = await convertHtmlToAbsoluteUrls(content, absolutePostUrl);

  return content;
};
