export default class Year {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Archives",
      pagination: {
        data: "collections.years",
        size: 1,
        alias: "year",
      },
      eleventyComputed: {
        summary: ({ year }) => year.title,
        pagination: ({ year }) => year,
        sectionTitle: ({ year }) =>
          year.pageNumber === 0
            ? "Posts from this year"
            : `Posts from this year (page ${year.pageNumber + 1})`,
      },
      sectionTitle: "Browse by year",
      permalink: ({ year }) => year.permalink,
    };
  }
}
