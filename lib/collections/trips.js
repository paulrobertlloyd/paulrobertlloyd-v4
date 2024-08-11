import { range } from "../utils/range.js";
import { trip } from "./trip.js";

export const trips = (collection) => {
  const paginationSet = new Set();
  const currentYear = new Date().getFullYear();
  const years = [...range(2003, currentYear)];

  const hrefs = [];
  for (const year of years) {
    hrefs.push(year === currentYear ? "/trips/" : `/trips/${year}/`);
  }

  for (const [index, year] of years.entries()) {
    const items = trip(collection).filter((item) => item.data.year === year);

    paginationSet.add({
      year,
      pageNumber: year,
      hrefs,
      href: {
        first: hrefs[0],
        last: hrefs.at(-1),
        previous: hrefs[index + 1],
        previousLabel: year + 1,
        next: hrefs[index - 1],
        nextLabel: year - 1,
      },
      permalink: hrefs[index],
      items,
      ...year.data,
    });
  }

  return [...paginationSet].reverse();
};
