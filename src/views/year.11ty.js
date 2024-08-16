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
        sectionTitle: ({ year }) => `Posts from ${year.label}`,
      },
      sectionTitle: "Browse by year",
      permalink: ({ year }) => year.permalink,
    };
  }
}
