export default class Itineraries {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Travel",
      pagination: {
        data: "collections.itinerary",
        size: 48,
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
          ? `/travel/page/${pagination.pageNumber + 1}.html`
          : "/travel/",
    };
  }
}
