import { postTypes } from "../../lib/post-types.js";

export default class Bookmarks {
  data() {
    const { listPath, listSize } = postTypes.bookmark;

    return {
      layout: "pagination.liquid",
      title: "Bookmarks",
      pagination: {
        data: "collections.bookmark",
        size: listSize,
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent bookmarks"
            : `Older bookmarks (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `${listPath}page/${pagination.pageNumber + 1}.html`
          : listPath,
    };
  }
}
