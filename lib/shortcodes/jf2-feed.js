const {absoluteUrl} = require('@11ty/eleventy-plugin-rss');
const markdown = require('../filters/markdown');
const templateContentToFeedHtml = require('../filters/template-content-to-feed-html');
const templateContentToFeedText = require('../filters/template-content-to-feed-text');

/**
 * Generate a JF2 Feed
 *
 * @param {Array} collection Collection to use
 * @param {object} app Application data
 * @param {number} n Number of items to include
 * @returns {object} JF2 Feed
 * @see https://jf2.spec.indieweb.org/#jf2feed
 */
module.exports = (collection, app, n = 10) => {
  const items = collection.slice(0, n);

  const feed = {
    type: 'feed',
    name: app.title,
    summary: app.description,
    url: app.url,
    photo: absoluteUrl(app.icon, app.url),
    author: {
      type: 'card',
      name: app.author.name,
      url: app.author.url,
      photo: app.author.avatar
    },
    children: []
  };

  for (const item of items) {
    feed.children.push({
      type: 'entry',
      'post-type': item.data.layout,
      url: absoluteUrl(item.url, app.url),
      published: item.date,
      name: item.data.title,
      summary: markdown(item.data.summary, 'inline'),
      content: {
        html: templateContentToFeedHtml(item),
        text: templateContentToFeedText(item)
      },
      category: item.data.category,
      'bookmark-of': item.data.bookmarkOf,
      'in-reply-to': item.data.inReplyTo,
      ...(item.data.photo && {photo: item.data.photo.map(photo => ({
        url: absoluteUrl(photo.url, app.url),
        alt: photo.alt
      }))}),
      'mp-syndicate-to': item.data['mp-syndicate-to'],
      syndication: item.data.syndication
    });
  }

  const jf2 = JSON.stringify(feed, null, 2);

  return jf2;
};
