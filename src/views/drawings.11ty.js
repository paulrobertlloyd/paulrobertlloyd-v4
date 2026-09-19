import { postTypes } from "../../lib/post-types.js";

export default class Drawings {
  data() {
    const { listPath, listSize } = postTypes.drawing;

    return {
      layout: "pagination.liquid",
      title: "Drawings",
      pagination: {
        data: "collections.drawing",
        size: listSize,
        component: "card",
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent drawings"
            : `Older drawings (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `${listPath}page/${pagination.pageNumber + 1}.html`
          : listPath,
    };
  }
}
