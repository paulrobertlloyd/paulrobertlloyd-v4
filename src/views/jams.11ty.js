export default class Jams {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Jams",
      pagination: {
        data: "collections.jam",
        size: 36,
        title: "Recent jams",
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent jams"
            : `Older jams (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/jams/page/${pagination.pageNumber + 1}.html`
          : "/jams/",
    };
  }
}
