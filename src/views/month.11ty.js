export default class Month {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Archives",
      pagination: {
        data: "collections.months",
        size: 1,
        alias: "month",
      },
      eleventyComputed: {
        summary: ({ month }) => month.title,
        pagination: ({ month }) => month,
        sectionTitle: ({ month }) =>
          month.pageNumber === 0
            ? "Posts from this month"
            : `Posts from this month (page ${month.pageNumber + 1})`,
      },
      permalink: ({ month }) => month.permalink,
    };
  }
}
