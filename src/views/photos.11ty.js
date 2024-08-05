export default class Photos {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Photos",
      pagination: {
        data: "collections.photo",
        size: 36,
        component: "card",
        gridSize: "20%",
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent photos"
            : `Photos (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/photos/page/${pagination.pageNumber + 1}.html`
          : "/photos/",
    };
  }
}
