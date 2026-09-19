import { postTypes } from "../../lib/post-types.js";

export default class Photos {
  data() {
    const { listPath, listSize } = postTypes.photo;

    return {
      layout: "pagination.liquid",
      title: "Photos",
      pagination: {
        data: "collections.photo",
        size: listSize,
        component: "card",
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent photos"
            : `Older photos (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `${listPath}page/${pagination.pageNumber + 1}.html`
          : listPath,
    };
  }
}
