import { postTypes } from "../../lib/post-types.js";

export default class Collections {
  data() {
    const { listPath, listSize } = postTypes.collection;

    return {
      layout: "pagination.liquid",
      title: "Collections",
      summary: "Curated series of posts covering a particular theme.",
      pagination: {
        data: "collections.collection",
        size: listSize,
      },
      tags: ["archive"],
      sectionTitle: "Collections A-Z",
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `${listPath}page/${pagination.pageNumber + 1}.html`
          : listPath,
    };
  }
}
