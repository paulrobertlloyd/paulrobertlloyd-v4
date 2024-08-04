export default class Projects {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Projects",
      summary:
        "I help responsible organisations create purposeful digital products and services.",
      pagination: {
        data: "collections.collection",
        size: 3,
        gridSize: "18rem",
        before: (items) =>
          items.filter((item) => item.data.post_type === "project"),
      },
      featured: {
        collection: "project",
        limit: 9,
        title: "Select case studies",
        itemsHideFooter: true,
      },
      sectionTitle: "The work that I do",
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/projects/page/${pagination.pageNumber + 1}.html`
          : "/projects/",
    };
  }
}
