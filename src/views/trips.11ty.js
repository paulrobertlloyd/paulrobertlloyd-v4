export default class Trips {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Trips",
      pagination: {
        data: "collections.trips",
        size: 1,
        alias: "archive",
      },
      tags: ["archive"],
      eleventyComputed: {
        pagination: ({ archive }) => archive,
        sectionTitle: ({ archive, currentYear }) =>
          archive.year === currentYear
            ? "Recent trips"
            : `${archive.items.length} trips`,
        summary: ({ archive, currentYear }) =>
          archive.year === currentYear
            ? "Individual trips by air, rail and sea."
            : `${archive.year}`,
        trips: ({ archive, currentYear }) => archive.year === currentYear,
      },
      permalink: ({ archive }) => archive.permalink,
    };
  }
}
