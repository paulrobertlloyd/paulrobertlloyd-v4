const {DateToSxg} = require('newbase60');
const webmentions = require('../../lib/utils/get-webmentions.js');
const summaryImagePath = require('../../lib/utils/get-summary-image-path.js');
const geojson = require('../../lib/utils/get-geojson.js');

module.exports = {
  published: data => data.start || data.date,
  date_sxg: data => DateToSxg(new Date(data.published)),
  type_index: data => data.type_index || data.page.fileSlug || 1,
  uid: data => data.type_prefix && `${data.type_prefix}${data.date_sxg}${data.type_index}`,
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
    ? (Array.isArray(data.photo) ? data.photo : [data.photo])
    : false,
  related(data) {
    const {collections, article_id, photo_id} = data;
    const related = collections.public.filter(item => {
      const {uid} = item.data;
      return uid && (article_id?.includes(uid) || photo_id?.includes(uid));
    });

    return related;
  },
  webmentions(data) {
    const url = data.app.url + data.page.url;
    return webmentions(data.webmentions.children, url);
  },
  // Return geojson object for trip pages
  // Can’t use frontmatter as liquid returns objects as strings
  geojson(data) {
    return data.itinerary && geojson(data.itinerary);
  },
};
