import { chunk } from "../utils/chunk.js";
import { month } from "./month.js";

export const months = (collection) => {
  const paginationSize = 48;
  const paginationSet = new Set();
  const months = month();

  for (const month of months) {
    const monthItems = collection
      .getFilteredByGlob("src/content/**/*.markdown")
      .filter((item) => item.data.visibility !== "unlisted")
      .filter(({ data }) => {
        if (!data.date) return;

        const date = new Date(data.date).toISOString();

        return date.includes(month.key);
      })
      .reverse();

    const pageItems = [...chunk(monthItems, paginationSize)];
    const pageNumbers = pageItems.length > 0 ? [...pageItems.keys()] : [0];

    const hrefs = [];
    for (const pageNumber of pageNumbers) {
      const href =
        pageNumber === 0
          ? month.url
          : `${month.url}page/${pageNumber + 1}.html`;

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
        ...month.data,
      });
    }
  }

  return [...paginationSet];
};
