const webmentions = require('../../lib/utils/get-webmentions.js');
const summaryImagePath = require('../../lib/utils/get-summary-image-path.js');

module.exports = {
  page_title: data => `${data.title} · ${data.app.name}`,
  page_image: data => data.photo
    ? (data.photo[0] || data.photo)
    : false,
  canonical_url: data => data.canonical && data.canonical.url
    ? data.canonical.url
    : data.app.url + data.page.url,
  summary_card: data => data.page_image
    ? 'summary_large_image'
    : 'summary',
  summary_image: data => data.page_image
    ? summaryImagePath(data.page_image.url)
    : data.app.url + data.app.icon,
  summary_image_alt: data => data.page_image
    ? data.page_image.alt
    : 'Logo',
  photos: data => data.photo
    ? Array.isArray(data.photo) ? data.photo : [data.photo]
    : false,
  related: data => {
    const posts = data.collections.post;
    const related = data.related ? data.related : [];
    return posts.filter(post => related.includes(post.url));
  },
  webmentions: data => {
    const url = data.app.url + data.page.url;
    return webmentions(data.webmentions.children, url);
  },
};
