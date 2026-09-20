import { getPublicItems } from "../utils/collection.js";
import { chunk } from "../utils/generator.js";
import { category } from "./category.js";

export const categories = (collection) => {
  const paginationSize = 24;
  const paginationSet = new Set();
  const publicItems = getPublicItems(collection);
  const tags = category(collection);

  for (const tag of tags) {
    const tagItems = publicItems
      .filter(({ data }) => data.category && data.category.includes(tag))
      .toReversed();
    const pagedItems = [...chunk(tagItems, paginationSize)];

    const hrefs = [];
    for (const index of pagedItems.keys()) {
      const href =
        index === 0
          ? `/categories/${tag}/`
          : `/categories/${tag}/page/${index + 1}.html`;

      hrefs.push(href);
    }

    for (const pageNumber of pagedItems.keys()) {
      paginationSet.add({
        tag,
        pageNumber,
        hrefs,
        href: {
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
