const fs = require('fs');
const path = require('path');
const parseOpml = require('node-opml-parser');
const opmlPath = path.resolve(process.env.PWD, 'src', 'subscriptions.opml');

module.exports = function () {
  const outline = [];

  if (fs.existsSync(opmlPath)) {
    const opml = fs.readFileSync(opmlPath, 'utf8');
    parseOpml(opml, (error, items) => {
      if (error) {
        console.error(error);
        return;
      }

      Array.prototype.push.apply(outline, items);
    });
  }

  // Sort items in outline
  const subscriptions = outline.sort((a, b) => (a.title > b.title) ? 1 : -1);

  // Return data object
  return {
    subscriptions: subscriptions.map(item => {
      const url = new URL(item.feedUrl);
      const hostname = url.hostname.replace(/(?:www\.)?/g, '');
      const pathname = url.pathname.replace(/\/$/g, '');

      return {
        url: item.url,
        data: {
          title: item.title,
          summary: `[${hostname}${pathname}](${item.feedUrl})`
        }
      };
    })
  };
};
