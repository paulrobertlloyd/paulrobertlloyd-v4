export default class Category {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Categories",
      pagination: {
        data: "collections.categories",
        size: 1,
        alias: "tag",
      },
      eleventyComputed: {
        summary: ({ tag }) => tag.tag,
        pagination: ({ tag }) => tag,
        sectionTitle: ({ tag }) =>
          tag.pageNumber === 0
            ? "Posts in this category"
            : `Posts in this category (page ${tag.pageNumber + 1})`,
      },
      permalink: ({ tag }) => tag.permalink,
    };
  }
}
