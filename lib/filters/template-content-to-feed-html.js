const absoluteUrl = require('../filters/absolute-url');
const hostname = require('../filters/hostname');

/**
 * Get content of a post as HTML (suitable for RSS feed readers)
 *
 * @param {string} item Post data
 * @param {string} app Application data
 * @return {string} Decorate HTML text
 */
module.exports = item => {
  const {app} = item.data;
  let content = '';

  // If post is in response to another URL, show a link to that URL
  if (item.data.inReplyTo) {
    content += `<p><small>↪︎ In reply to <a class="u-in-reply-to" href="${item.data.inReplyTo}">a post on ${hostname(item.data.inReplyTo)}</a></small></p>`;
  }

  // Remove line breaks from template content
  content += item.templateContent.replace(/\n/g, '');

  // If post contains photos, present each within a figure
  if (item.data.photo) {
    for (const photo of item.data.photo) {
      content += `<figure><img src="${absoluteUrl(photo.url, app.url)}" alt="${photo.alt}"></figure>`;
    }
  }

  // If post has a title, prompt readers to respond by email
  if (item.data.title) {
    content += `<hr><p><a href="mailto:${app.author.email}?subject=Reply: ${item.data.title}">Reply via email</a></p>`;
  }

  return content;
};
