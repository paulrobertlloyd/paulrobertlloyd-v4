export default class Collections {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Collections",
      summary: "Curated series of posts covering a particular theme.",
      pagination: {
        data: "collections.collection",
        size: 24,
      },
      tags: ["archive"],
      sectionTitle: "Collections A-Z",
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/collections/page/${pagination.pageNumber + 1}.html`
          : "/collections/",
    };
  }
}
