import { chunk } from "../utils/chunk.js";
import { year } from "./year.js";

export const years = (collection) => {
  const paginationSize = 48;
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
      .reverse();

    const pageItems = [...chunk(yearItems, paginationSize)];
    const pageNumbers = pageItems.length > 0 ? [...pageItems.keys()] : [0];

    const hrefs = [];
    for (const pageNumber of pageNumbers) {
      const href =
        pageNumber === 0 ? year.url : `${year.url}page/${pageNumber + 1}.html`;

      hrefs.push(href);
    }

    for (const pageNumber of pageNumbers) {
      paginationSet.add({
        pageNumber,
        hrefs,
        href: {
          first: hrefs[0],
          last: hrefs.at(-1),
          previous: hrefs[pageNumber - 1],
          next: hrefs[pageNumber + 1],
        },
        permalink: hrefs[pageNumber],
        items: pageItems[pageNumber],
        ...year.data,
      });
    }
  }

  return [...paginationSet];
};
