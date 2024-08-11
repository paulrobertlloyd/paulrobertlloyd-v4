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
        page_title: ({ tag }) => `Posts tagged ‘${tag.tag}’ · Categories`,
        pagination: ({ tag }) => tag,
        sectionTitle: ({ tag }) =>
          tag.pageNumber === 0
            ? `Posts tagged ‘${tag.tag}’`
            : `Posts tagged ‘${tag.tag}’ (page ${tag.pageNumber + 1})`,
      },
      permalink: ({ tag }) => tag.permalink,
    };
  }
}
