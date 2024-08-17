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
        before: (items) =>
          items.filter((item) => item.data.postType === "project"),
      },
      featured: {
        collection: "project",
        limit: 9,
        title: "Select case studies",
      },
      sectionTitle: "The work that I do",
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/projects/page/${pagination.pageNumber + 1}.html`
          : "/projects/",
    };
  }
}
