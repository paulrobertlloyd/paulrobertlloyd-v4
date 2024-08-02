export default class Events {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Events",
      summary: "Exhibitions, conferences and other events I’ve attended.",
      pagination: {
        data: "collections.events",
        size: 48,
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
            : `Events (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/events/page/${pagination.pageNumber + 1}.html`
          : "/events/",
    };
  }
}
