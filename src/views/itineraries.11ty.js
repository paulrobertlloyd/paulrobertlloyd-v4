import { postTypes } from "../../lib/post-types.js";

export default class Itineraries {
  data() {
    const { listPath, listSize } = postTypes.itinerary;

    return {
      layout: "pagination.liquid",
      title: "Travel",
      pagination: {
        data: "collections.itinerary",
        size: listSize,
        component: "card",
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent trips"
            : `Trips (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `${listPath}page/${pagination.pageNumber + 1}.html`
          : listPath,
    };
  }
}
