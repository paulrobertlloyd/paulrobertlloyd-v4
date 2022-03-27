const getWebmentions = require('../../lib/utils/get-webmentions.js');

module.exports = {
  pageTitle: data => `${data.title} · ${data.app.title}`,
  pageImage: data => data.photo ? (data.photo[0] || data.photo) : false,
  canonicalUrl: data => {
    if (data.canonical && data.canonical.url) {
      return data.canonical.url;
    }

    return data.app.url + data.page.url;
  },
  summaryCard: data => data.pageImage ? 'summary_large_image' : 'summary',
  summaryImage: data => data.pageImage ? `https://res.cloudinary.com/paulrobertlloyd/image/fetch/c_fill,f_auto,q_auto,w_1200,h_630/${data.app.url}${data.pageImage.url}`
    : `${data.app.url}${data.app.icon}`,
  summaryImageAlt: data => data.pageImage ? data.pageImage.alt : 'Logo',
  related: data => {
    const posts = data.collections.post;
    const events = data.collections.event;
    const relatedItems = posts.concat(events);
    const related = data.related ? data.related : [];
    return relatedItems.filter(post => related.includes(post.url));
  },
  webmentions: data => {
    const url = data.app.url + data.page.url;
    return getWebmentions(data.webmentions.children, url);
  },
};
