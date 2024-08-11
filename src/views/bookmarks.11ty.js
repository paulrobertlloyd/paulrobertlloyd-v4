export default class Bookmarks {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Bookmarks",
      pagination: {
        data: "collections.bookmark",
        size: 24,
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent bookmarks"
            : `Older bookmarks (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/bookmarks/page/${pagination.pageNumber + 1}.html`
          : "/bookmarks/",
    };
  }
}
