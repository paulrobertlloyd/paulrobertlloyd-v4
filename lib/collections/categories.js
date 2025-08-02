import { chunk } from "../utils/generator.js";
import { category } from "./category.js";

export const categories = (collection) => {
  const paginationSize = 24;
  const paginationSet = new Set();
  const tags = category(collection);

  for (const tag of tags) {
    const tagItems = collection
      .getFilteredByGlob("src/content/**/*.markdown")
      .filter((item) => item.data.visibility !== "unlisted")
      .filter(({ data }) => data.category && data.category.includes(tag))
      .toReversed();
    const pagedItems = [...chunk(tagItems, paginationSize)];

    const hrefs = [];
    for (const [index] of pagedItems.entries()) {
      const href =
        index === 0
          ? `/categories/${tag}/`
          : `/categories/${tag}/page/${index + 1}.html`;

      hrefs.push(href);
    }

    for (const [pageNumber] of pagedItems.entries()) {
      paginationSet.add({
        tag,
        pageNumber,
        hrefs,
        href: {
          first: hrefs[0],
          last: hrefs.at(-1),
          previous: hrefs[pageNumber - 1],
          next: hrefs[pageNumber + 1],
        },
        permalink: hrefs[pageNumber],
        items: pagedItems[pageNumber],
      });
    }
  }

  return [...paginationSet];
};
