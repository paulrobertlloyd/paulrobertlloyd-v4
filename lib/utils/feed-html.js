import convertHtmlToAbsoluteUrls from "@11ty/eleventy-plugin-rss/src/htmlToAbsoluteUrls.js";

/**
 * Get content of a post as HTML (suitable for RSS feed readers)
 * @param {string} item - Post data
 * @returns {string} Decorate HTML text
 */
export const getFeedHtml = async (item) => {
  const { app, jamOf, pkg, title, type } = item.data;
  let content = "";

  // If post is a jam, show a link to embed
  if (jamOf) {
    content += `<p>♫ <a class="u-jam-of" href="${jamOf.url}">${jamOf.name} by ${jamOf.author}</a></p>`;
  }

  // Remove line breaks from template content
  content += item.content.replaceAll("\n", "");

  // If article post, prompt readers to respond by email
  if (type === "article") {
    content += `<hr><p><a href="mailto:${pkg.author.email}?subject=Reply: ${title}">Reply via email</a></p>`;
  }

  // Convert relative media paths to absolute media paths
  content = content.replaceAll("../media/", "/media/");

  // Update local absolute media paths to public media paths
  content = content.replaceAll("/content/media/", "/media/");

  // Convert relative URLs to absolute URLs
  const absolutePostUrl = app.url ? new URL(item.url, app.url).href : item.url;
  content = await convertHtmlToAbsoluteUrls(content, absolutePostUrl);

  return content;
};
