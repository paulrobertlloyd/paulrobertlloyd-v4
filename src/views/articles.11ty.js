export default class Articles {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Writing",
      summary: "Short posts, articles and essays.",
      pagination: {
        data: "collections.article",
        size: 24,
      },
      eleventyComputed: {
        featured: ({ pagination }) =>
          pagination.pageNumber === 0 && {
            collection: "highlights",
            limit: 6,
            title: "Select articles",
          },
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent posts"
            : `Posts (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/articles/page/${pagination.pageNumber + 1}.html`
          : "/articles/",
    };
  }
}
