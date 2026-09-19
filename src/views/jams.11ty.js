import { postTypes } from "../../lib/post-types.js";

export default class Jams {
  data() {
    const { listPath, listSize } = postTypes.jam;

    return {
      layout: "pagination.liquid",
      title: "Jams",
      pagination: {
        data: "collections.jam",
        size: listSize,
        title: "Recent jams",
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent jams"
            : `Older jams (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `${listPath}page/${pagination.pageNumber + 1}.html`
          : listPath,
    };
  }
}
