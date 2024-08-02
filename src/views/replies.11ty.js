export default class Replies {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Replies",
      pagination: {
        data: "collections.reply",
        size: 36,
      },
      eleventyComputed: {
        sectionTitle: ({ pagination }) =>
          pagination.pageNumber === 0
            ? "Recent replies"
            : `Replies (page ${pagination.pageNumber + 1})`,
      },
      permalink: ({ pagination }) =>
        pagination.pageNumber > 0
          ? `/replies/page/${pagination.pageNumber + 1}.html`
          : "/replies/",
    };
  }
}
