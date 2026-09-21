import { pluralise } from "../../lib/utils/string.js";

const CURRENT_YEAR = new Date().getFullYear();

/**
 * Group trips into a page per year, newest first
 * @param {Array} items - Trips
 * @returns {Array<object>} Pages
 */
const byYear = (items) =>
  [...Map.groupBy(items, (item) => item.data.year)]
    .map(([year, trips]) => ({
      year,
      trips,
      label: String(year),
      permalink: year === CURRENT_YEAR ? "/trips/" : `/trips/${year}/`,
    }))
    .toReversed();

export default class Trips {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Trips",
      pagination: {
        data: "collections.trip",
        size: 1,
        alias: "archive",
        before: byYear,
      },
      tags: ["archive"],
      eleventyComputed: {
        pagination: (data) => ({
          ...data.pagination,
          items: data.archive.trips,
        }),
        sectionTitle: ({ archive }) =>
          `${archive.label} (${pluralise(archive.trips.length, "trip")})`,
        summary: ({ archive }) =>
          archive.year === CURRENT_YEAR &&
          "Individual trips by air, rail and sea.",
        trips: ({ archive }) => archive.year === CURRENT_YEAR,
      },
      permalink: ({ archive }) => archive.permalink,
    };
  }
}
