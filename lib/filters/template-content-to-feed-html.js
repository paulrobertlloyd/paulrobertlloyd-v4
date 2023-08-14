const {
  absoluteUrl,
  convertHtmlToAbsoluteUrls,
} = require("@11ty/eleventy-plugin-rss");
const hostname = require("../filters/hostname.js");

/**
 * Get content of a post as HTML (suitable for RSS feed readers)
 * @param {string} item - Post data
 * @returns {string} Decorate HTML text
 */
module.exports = async (item) => {
  const { app, in_reply_to, photo, pkg, title, type } = item.data;
  let content = "";

  // If post is in response to another URL, show a link to that URL
  if (in_reply_to) {
    content += `<p><small>↪︎ In reply to <a class="u-in-reply-to" href="${in_reply_to}">a post on ${hostname(
      in_reply_to,
    )}</a></small></p>`;
  }

  // Remove line breaks from template content
  content += item.templateContent.replaceAll("\n", "");

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
  const absolutePostUrl = new URL(item.url, app.url).href;
  content = await convertHtmlToAbsoluteUrls(content, absolutePostUrl);

  return content;
};
