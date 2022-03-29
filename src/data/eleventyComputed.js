const getWebmentions = require('../../lib/utils/get-webmentions.js');
const getImagePath = require('../../lib/utils/get-image-path.js')

module.exports = {
  pageTitle: data => `${data.title} · ${data.app.title}`,
  pageImage: data => data.photo
    ? (data.photo[0] || data.photo)
    : false,
  canonicalUrl: data => data.canonical && data.canonical.url
    ? data.canonical.url
    : data.app.url + data.page.url,
  summaryCard: data => data.pageImage
    ? 'summary_large_image'
    : 'summary',
  summaryImage: data => data.pageImage
    ? getImagePath(data.pageImage.url, 'summary')
    : data.app.url + data.app.icon,
  summaryImageAlt: data => data.pageImage
    ? data.pageImage.alt
    : 'Logo',
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
