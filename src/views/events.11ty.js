import { postTypes } from "../../lib/post-types.js";

export default class Events {
  data() {
    const { listPath, listSize } = postTypes.event;

    return {
      layout: "pagination.liquid",
      title: "Events",
      pagination: {
        data: "collections.attended",
        size: listSize,
        component: "event",
      },
      eleventyComputed: {
        featured: ({ pagination }) =>
          pagination.pageNumber === 0 && {
            collection: "upcoming",
            limit: 3,
            title: "Upcoming events",
          },
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent events"
            : `Older events (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `${listPath}page/${pagination.pageNumber + 1}.html`
          : listPath,
    };
  }
}
