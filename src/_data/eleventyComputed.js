const summaryImagePath = require('../../lib/utils/get-summary-image-path.js');
const getGeojson = require('../../lib/utils/get-geojson.js');
const getId = require('../../lib/utils/get-id.js');

module.exports = {
  id: data => getId(data),
  page_title: data => `${data.title}`,
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
      const {id} = item.data;
      return id && (article_id?.includes(id) || photo_id?.includes(id));
    });

    return related;
  },
  // Return geojson object for trip pages
  // Can’t use frontmatter as liquid returns objects as strings
  geojson(data) {
    return data.geojson || (data.itinerary && getGeojson(data.itinerary));
  },
};
