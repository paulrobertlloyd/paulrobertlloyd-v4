import { getColor } from "../../lib/utils/string.js";
import { getPost } from "../../lib/utils/post.js";

export default {
  id: (data) => getPost(data).id,
  permalink: (data) => getPost(data).permalink,
  pageTitle: (data) => data.page.url !== "/" && data.title,
  published: (data) => data?.date || data.page.date,
  showTime: (data) => !data.title,
  commentsMeta: (data) =>
    data.collections[data.id]?.find((item) => item.data?.type === "comments"),
  featuredImage: (data) =>
    data.featured ? data.featured.url : data.app.url + data.app.icons[1].src,
  featuredImageAlt: (data) => (data.featured ? data.featured.alt : "Logo"),
  color: (data) =>
    data.color || getColor(data.location?.locality || data.date) || "#10e",
  syndicate: (data) => getPost(data).syndicate,
  visibility: (data) => getPost(data).visibility,
  vocabulary: (data) => getPost(data).vocabulary,
};
