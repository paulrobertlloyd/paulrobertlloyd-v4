const getGeojson = require('../../lib/utils/get-geojson.js');
const getId = require('../../lib/utils/get-id.js');

module.exports = {
  id: data => getId(data),
  page_title: data => data.title,
  page_image: data => data.photo && data.photo[0],
  canonical_url: data => data.canonical?.url || data.app.url + data.page.url,
  summary_image: data => data.page_image
    ? `${data.page_image.url}?tr=w-1200,h-630,fo-auto`
    : data.app.url + data.app.icon,
  summary_image_alt: data => data.page_image
    ? data.page_image.alt
    : 'Logo',
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
