import { category } from "./category.js";

/**
 * Splits an array into chunks of a specified size.
 * @generator
 * @param {Array} array - Array to split
 * @param {number} n - Size of each chunk
 * @yields {Array} Chunk of the original array
 * @example
 * const array = [1, 2, 3, 4, 5, 6, 7, 8];
 * const chunkGenerator = chunks(array, 3);
 * for (let chunk of chunkGenerator) {
 *   console.log(chunk);
 * }
 * // Output: [1, 2, 3]
 * //         [4, 5, 6]
 * //         [7, 8]
 */
function* chunks(array, n) {
  for (let index = 0; index < array.length; index += n) {
    yield array.slice(index, index + n);
  }
}

export const categories = (collection) => {
  const paginationSize = 24;
  const paginationSet = new Set();
  const tags = category(collection);

  for (const tag of tags) {
    const tagItems = collection
      .getFilteredByGlob("src/content/**/*.markdown")
      .filter((item) => item.data.visibility !== "unlisted")
      .filter(({ data }) => data.category && data.category.includes(tag))
      .reverse();
    const pagedItems = [...chunks(tagItems, paginationSize)];

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
