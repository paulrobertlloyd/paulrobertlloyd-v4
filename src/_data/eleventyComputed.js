/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
import { getColor } from "../../lib/utils/color.js";
import { getId } from "../../lib/utils/id.js";

export default {
  id: (data) => getId(data),
  page_title: (data) => (data.page.url === "/" ? false : data.title),
  page_image: (data) => data.photo && data.photo[0],
  published: (data) => data?.start || data?.date || data.page.date,
  properties: ({ collections, eleventy, page, pkg, ...rest }) => rest,
  publication: (data) => {
    const { collections, canonical } = data;
    const publication = collections.publication.find((item) => {
      const { issn, uid } = item.data;
      return (
        (issn && canonical?.issn === issn) ||
        (uid && canonical?.url?.includes(uid))
      );
    });
    return publication?.data;
  },
  summary_image: (data) =>
    data.page_image
      ? `${data.page_image.url}?tr=w-1200,h-630`
      : data.app.url + data.app.icons[1].src,
  summary_image_alt: (data) => (data.page_image ? data.page_image.alt : "Logo"),
  accent_color: (data) =>
    data.accent_color ||
    getColor(data.location?.locality || data.date || "#10e"),
  related(data) {
    const { collections, article_id, photo_id } = data;
    const related = collections.publicVisibility.filter((item) => {
      const { id } = item.data;
      return id && (article_id?.includes(id) || photo_id?.includes(id));
    });

    return related;
  },
};
