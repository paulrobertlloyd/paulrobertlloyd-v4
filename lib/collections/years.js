import { range } from "../utils/generator.js";
import { year } from "./year.js";

export const years = (collection) => {
  const paginationSet = new Set();
  const years = year();

  for (const year of years) {
    const yearItems = collection
      .getFilteredByGlob("src/content/**/*.markdown")
      .filter((item) => item.data.visibility !== "unlisted")
      .filter(({ data }) => {
        if (!data.date) return;

        const date = new Date(data.date).toISOString();

        return date.includes(year.key);
      })
      .toReversed();

    // Group pages by month
    const pageItems = [];
    for (const month of range(0, 11)) {
      const monthItems = yearItems.filter(
        ({ data }) => month === new Date(data.date).getMonth(),
      );
      pageItems.push(monthItems);
    }

    const pageNumbers = pageItems.length > 0 ? [...pageItems.keys()] : [0];

    const hrefs = [];
    for (const pageNumber of pageNumbers) {
      const month = String(pageNumber + 1).padStart(2, "0");
      const href = pageNumber === 0 ? year.url : `${year.url}${month}/`;

      hrefs.push(href);
    }

    for (const pageNumber of pageNumbers) {
      const pageDate = new Date(year.key, pageNumber);
      const previousDate = new Date(year.key, pageNumber + 1);
      const nextDate = new Date(year.key, pageNumber - 1);

      paginationSet.add({
        label: pageDate.toLocaleString("en-GB", {
          month: "long",
        }),
        pageNumber,
        hrefs,
        href: {
          first: hrefs[0],
          last: hrefs.at(-1),
          previous: hrefs[pageNumber + 1],
          previousLabel: previousDate.toLocaleString("en-GB", {
            month: "long",
          }),
          next: hrefs[pageNumber - 1],
          nextLabel: nextDate.toLocaleString("en-GB", { month: "long" }),
        },
        permalink: hrefs[pageNumber],
        items: pageItems[pageNumber],
        ...year.data,
      });
    }
  }

  return [...paginationSet];
};
