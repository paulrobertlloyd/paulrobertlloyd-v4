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
    shareImage: data => {
      const {image} = data;
      if (image) {
        return `https://res.cloudinary.com/paulrobertlloyd/image/fetch/c_fill,f_auto,q_auto,w_1200,h_630/${data.app.url}${image}`;
      }

      return data.app.url + data.app.icon;
    },
    relatedArticles: data => {
      const articles = data.collections.article;
      const related = data.related ? data.related : [];
      return articles.filter(article => related.includes(article.url));
    },
    webmentions: data => {
      const url = data.app.url + data.page.url;
      return getWebmentions(data.webmentions.children, url);
    },
  },
};
