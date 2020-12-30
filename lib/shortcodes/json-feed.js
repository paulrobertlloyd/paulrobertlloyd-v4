const path = require('path');
const absoluteUrl = require('../filters/absolute-url');
const markdown = require('../filters/markdown');
const getMimeType = require('mime-type-check');
const getContentHtml = require('../utils/get-content-html');
const getContentText = require('../utils/get-content-text');

module.exports = (collection, app, n = 10) => {
  const items = collection.slice(0, n);

  const feed = {
    version: 'https://jsonfeed.org/version/1.1',
    title: app.title,
    description: app.description,
    home_page_url: app.url,
    feed_url: absoluteUrl('feed.json', app.url),
    favicon: absoluteUrl(app.favicon, app.url),
    icon: absoluteUrl(app.icon, app.url),
    language: app.language,
    authors: [{
      name: app.author.name,
      url: app.author.url,
      avatar: app.author.avatar
    }],
    items: []
  };

  for (const item of items) {
    feed.items.push({
      id: absoluteUrl(item.url, app.url),
      url: absoluteUrl(item.url, app.url),
      ...(item.data.url && {external_url: item.data.url}),
      ...(item.data.in_reply_to && {external_url: item.data.in_reply_to}),
      title: item.data.title,
      content_text: getContentText(item),
      content_html: getContentHtml(item, app),
      ...(item.data.summary && {summary: markdown(item.data.summary, 'inline')}),
      ...(item.data.category && {tags: item.data.category}),
      date_published: item.date,
      ...(item.data.photo && {attachments: item.data.photo.map(photo => ({
        url: absoluteUrl(photo.url, app.url),
        title: photo.alt,
        mime_type: getMimeType(path.extname(photo.url).slice(1))[0]
      }))})
    });
  }

  const json = JSON.stringify(feed, null, 2);

  return json;
};
