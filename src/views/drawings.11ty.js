export default class Drawings {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Drawings",
      pagination: {
        data: "collections.drawing",
        size: 24,
        component: "card",
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent drawings"
            : `Older drawings (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/drawings/page/${pagination.pageNumber + 1}.html`
          : "/drawings/",
    };
  }
}
