export default class Collections {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Archive",
      summary: "Collections",
      pagination: {
        data: "collections.collection",
        size: 24,
        gridSize: "16rem",
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/collections/page/${pagination.pageNumber + 1}.html`
          : "/collections/",
    };
  }
}
