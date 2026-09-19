import { postTypes } from "../../lib/post-types.js";

export default class Replies {
  data() {
    const { listPath, listSize } = postTypes.reply;

    return {
      layout: "pagination.liquid",
      title: "Replies",
      pagination: {
        data: "collections.reply",
        size: listSize,
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent replies"
            : `Older replies (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `${listPath}page/${pagination.pageNumber + 1}.html`
          : listPath,
    };
  }
}
