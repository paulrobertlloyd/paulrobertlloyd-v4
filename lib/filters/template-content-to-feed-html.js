import absoluteUrl from "@11ty/eleventy-plugin-rss/src/absoluteUrl.js";
import convertHtmlToAbsoluteUrls from "@11ty/eleventy-plugin-rss/src/htmlToAbsoluteUrls.js";
import { hostname } from "../filters/hostname.js";

/**
 * Get content of a post as HTML (suitable for RSS feed readers)
 * @param {string} item - Post data
 * @returns {string} Decorate HTML text
 */
export const template_content_to_feed_html = async (item) => {
  const { app, in_reply_to, jam_of, photo, pkg, title, type } = item.data;
  let content = "";

  // If post is a jam, show a link to embed
  if (jam_of) {
    content += `<p>♫ <a class="u-jam-of" href="${jam_of.url}">${jam_of.name} by ${jam_of.author}</a></p>`;
  }

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
  const absolutePostUrl = app.url ? new URL(item.url, app.url).href : item.url;
  content = await convertHtmlToAbsoluteUrls(content, absolutePostUrl);

  return content;
};
