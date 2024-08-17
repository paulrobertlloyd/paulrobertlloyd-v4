/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
import { getColor } from "../../lib/utils/string.js";
import { getId } from "../../lib/utils/page.js";

export default {
  id: (data) => getId(data),
  pageTitle: (data) => (data.page.url === "/" ? false : data.title),
  published: (data) => data?.date || data.page.date,
  commentsMeta: (data) =>
    data.collections[data.id]?.find((item) => item.data?.type === "comments"),
  featuredImage: (data) =>
    data.featured ? data.featured.url : data.app.url + data.app.icons[1].src,
  featuredImageAlt: (data) => (data.featured ? data.featured.alt : "Logo"),
  color: (data) =>
    data.color || getColor(data.location?.locality || data.date) || "#10e",
};
