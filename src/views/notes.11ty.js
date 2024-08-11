export default class Notes {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Notes",
      pagination: {
        data: "collections.note",
        size: 36,
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent notes"
            : `Older notes (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/notes/page/${pagination.pageNumber + 1}.html`
          : "/notes/",
    };
  }
}
