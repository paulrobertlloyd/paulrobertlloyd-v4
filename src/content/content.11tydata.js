const getWebmentions = require('../../lib/utils/get-webmentions.js');

module.exports = {
  eleventyComputed: {
    pageTitle: data => `${data.title} · ${data.app.title}`,
    canonicalUrl: data => {
      if (data.canonical && data.canonical.url) {
        return data.canonical.url;
      }

      return data.app.url + data.page.url;
    },
    summaryCard: data => data.image ? 'summary_large_image' : 'summary',
    summaryImage: data => data.image ? `https://res.cloudinary.com/paulrobertlloyd/image/fetch/c_fill,f_auto,q_auto,w_1200,h_630/${data.app.url}${data.image}`
      : `${data.app.url}${data.app.icon}`,
    related: data => {
      const posts = data.collections.post;
      const related = data.related ? data.related : [];
      return posts.filter(post => related.includes(post.url));
    },
    webmentions: data => {
      const url = data.app.url + data.page.url;
      return getWebmentions(data.webmentions.children, url);
    },
  },
};
