import { postTypes } from "../../lib/post-types.js";

export default class Notes {
  data() {
    const { listPath, listSize } = postTypes.note;

    return {
      layout: "pagination.liquid",
      title: "Notes",
      pagination: {
        data: "collections.note",
        size: listSize,
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent notes"
            : `Older notes (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `${listPath}page/${pagination.pageNumber + 1}.html`
          : listPath,
    };
  }
}
