/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
import { getColor } from "../../lib/utils/color.js";
import { getId } from "../../lib/utils/id.js";

export default {
  id: (data) => getId(data),
  page_title: (data) => (data.page.url === "/" ? false : data.title),
  page_image: (data) => data.photo && data.photo[0],
  published: (data) => data?.date || data.page.date,
  properties: ({ collections, eleventy, page, pkg, ...rest }) => rest,
  comments_meta: (data) =>
    data.collections[data.id]?.find((item) => item.data?.type === "comments"),
  featured_image: (data) =>
    data.featured
      ? `${data.featured.url}?tr=w-1200,h-630`
      : data.app.url + data.app.icons[1].src,
  featured_image_alt: (data) => (data.featured ? data.featured.alt : "Logo"),
  accent_color: (data) =>
    data.accent_color ||
    getColor(data.location?.locality || data.date) ||
    "#10e",
};
