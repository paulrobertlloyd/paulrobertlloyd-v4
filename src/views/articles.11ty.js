import { postTypes } from "../../lib/post-types.js";

export default class Articles {
  data() {
    const { listPath, listSize } = postTypes.article;

    return {
      layout: "pagination.liquid",
      title: "Writing",
      summary: "Short posts, articles and essays.",
      pagination: {
        data: "collections.article",
        size: listSize,
      },
      eleventyComputed: {
        featured: ({ pagination }) =>
          pagination.pageNumber === 0 && {
            collection: "highlights",
            limit: 6,
            title: "Select articles",
          },
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent posts"
            : `Posts (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `${listPath}page/${pagination.pageNumber + 1}.html`
          : listPath,
    };
  }
}
