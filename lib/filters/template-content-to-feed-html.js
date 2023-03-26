const {absoluteUrl, convertHtmlToAbsoluteUrls} = require('@11ty/eleventy-plugin-rss');
const hostname = require('../filters/hostname.js');

/**
 * Get content of a post as HTML (suitable for RSS feed readers)
 *
 * @param {string} item - Post data
 * @returns {string} Decorate HTML text
 */
module.exports = async item => {
  const {app, pkg} = item.data;
  let content = '';

  // If post is in response to another URL, show a link to that URL
  if (item.data.in_reply_to) {
    content += `<p><small>↪︎ In reply to <a class="u-in-reply-to" href="${item.data.in_reply_to}">a post on ${hostname(item.data.in_reply_to)}</a></small></p>`;
  }

  // Remove line breaks from template content
  content += item.templateContent.replace(/\n/g, '');

  // If photo post, present each photo within a figure
  if (item.data.layout === 'photo') {
    for (const photo of item.data.photo) {
      content += `<figure><img src="${absoluteUrl(photo.url, app.url)}" alt="${photo.alt}"></figure>`;
    }
  }

  // If post has a title, prompt readers to respond by email
  if (item.data.title) {
    content += `<hr><p><a href="mailto:${pkg.author.email}?subject=Reply: ${item.data.title}">Reply via email</a></p>`;
  }

  // Convert relative URLs to absolute URLs
  const absolutePostUrl = new URL(item.url, app.url).href;
  content = await convertHtmlToAbsoluteUrls(content, absolutePostUrl);

  return content;
};
