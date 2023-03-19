const path = require('node:path');
const {absoluteUrl} = require('@11ty/eleventy-plugin-rss');
const getMimeType = require('mime-type-check');
const markdown = require('../filters/markdown.js');
const templateContentToFeedHtml = require('../filters/template-content-to-feed-html.js');

/**
 * Generate a JSON Feed
 *
 * @param {Array} collection - Collection to use
 * @param {object} app - Application data
 * @param {number} n - Number of items to include
 * @returns {object} JSON Feed
 * @see https://jsonfeed.org/version/1.1
 */
module.exports = async (collection, app, n = 10) => {
  const items = collection.slice(0, n);

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: app.name,
    description: app.description,
    home_page_url: app.url,
    feed_url: absoluteUrl('feed.json', app.url),
    favicon: absoluteUrl(app.favicon, app.url),
    icon: absoluteUrl(app.icon, app.url),
    language: app.lang,
    authors: [{
      name: app.author.name,
      url: app.author.url,
      avatar: app.author.avatar,
    }],
    items: [],
  };

  for await (const item of items) {
    feed.items.push({
      id: absoluteUrl(item.url, app.url),
      url: absoluteUrl(item.url, app.url),
      date_published: item.date,
      ...(item.data.title && {title: item.data.title}),
      summary: markdown(item.data.summary, 'inline'),
      content_html: await templateContentToFeedHtml(item),
      tags: item.data.category,
      external_url: item.data.bookmark_of || item.data.in_reply_to || item.data.url,
      ...(item.data.photos && {attachments: item.data.photos.map(photo => ({
        url: absoluteUrl(photo.url, app.url),
        title: photo.alt,
        mime_type: getMimeType(path.extname(photo.url).slice(1))[0],
      }))}),
    });
  }

  const json = JSON.stringify(feed, null, 2);

  return json;
};
