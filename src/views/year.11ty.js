import { range } from "../../lib/utils/generator.js";
import { pluralise } from "../../lib/utils/string.js";

// Years to create archives for
const FIRST_YEAR = 2008;
const YEARS = [...range(FIRST_YEAR, new Date().getFullYear())].toReversed();

// Months in descending order, so archive pages run newest first
const MONTHS = Array.from({ length: 12 }).keys().toArray().toReversed();

/**
 * Get the key a post is grouped under
 * @param {number} year - Year
 * @param {number} month - Zero-indexed month
 * @returns {string} Key
 */
const monthKey = (year, month) => `${year}-${month}`;

/**
 * Group posts into a page per month, newest first
 *
 * Every month gets a page whether or not it holds anything: a year’s January
 * page is also that year’s root, and the archives page links to every year.
 * @param {Array} items - Public posts
 * @returns {Array<object>} Pages
 */
const byMonth = (items) => {
  const grouped = Map.groupBy(
    items.filter(({ data }) => data.date),
    ({ data }) => {
      const date = new Date(data.date);

      return monthKey(date.getFullYear(), date.getMonth());
    },
  );

  return YEARS.flatMap((year) =>
    MONTHS.map((month) => ({
      year,
      month,
      posts: grouped.get(monthKey(year, month)) ?? [],
      label: new Date(year, month).toLocaleString("en-GB", {
        month: "long",
        year: "numeric",
      }),
      permalink:
        month === 0
          ? `/${year}/`
          : `/${year}/${String(month + 1).padStart(2, "0")}/`,
    })),
  );
};

export default class Year {
  data() {
    return {
      layout: "pagination.liquid",
      title: "Archives",
      pagination: {
        data: "collections.publicVisibility",
        size: 1,
        alias: "archive",
        before: byMonth,
      },
      eleventyComputed: {
        pagination: (data) => ({
          ...data.pagination,
          items: data.archive.posts,
        }),
        sectionTitle: ({ archive }) =>
          `${archive.label} (${pluralise(archive.posts.length, "post")})`,
      },
      permalink: ({ archive }) => archive.permalink,
    };
  }
}
