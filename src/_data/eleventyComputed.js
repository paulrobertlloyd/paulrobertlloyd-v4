/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/
import { getColor } from "../../lib/utils/string.js";
import { getId, getPermalink } from "../../lib/utils/page.js";
import { postTypes } from "../../lib/post-types.js";

export default {
  id: (data) => getId(data),
  permalink: (data) => getPermalink(data),
  pageTitle: (data) => (data.page.url === "/" ? false : data.title),
  published: (data) => data?.date || data.page.date,
  showTime: (data) => !data.title,
  commentsMeta: (data) =>
    data.collections[data.id]?.find((item) => item.data?.type === "comments"),
  featuredImage: (data) =>
    data.featured ? data.featured.url : data.app.url + data.app.icons[1].src,
  featuredImageAlt: (data) => (data.featured ? data.featured.alt : "Logo"),
  color: (data) =>
    data.color || getColor(data.location?.locality || data.date) || "#10e",
  syndicate: (data) => data.syndicate ?? postTypes[data.type]?.syndicate,
  visibility: (data) => data.visibility ?? postTypes[data.type]?.visibility,
  vocabulary: (data) =>
    data.vocabulary ?? postTypes[data.type]?.vocabulary ?? "entry",
};
