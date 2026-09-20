import { range } from "../utils/generator.js";
import { trip } from "./trip.js";

export const trips = (collection) => {
  const paginationData = [];
  const currentYear = new Date().getFullYear();
  const years = [...range(2003, currentYear)];

  const hrefs = Array.from(years, (year) =>
    year === currentYear ? "/trips/" : `/trips/${year}/`,
  );

  // Build the trip collection once, then index it by year
  const tripsByYear = Map.groupBy(trip(collection), (item) => item.data.year);

  for (const [index, year] of years.entries()) {
    const items = tripsByYear.get(year) ?? [];

    paginationData.push({
      year,
      pageNumber: year,
      hrefs,
      href: {
        previous: hrefs[index + 1],
        previousLabel: year + 1,
        next: hrefs[index - 1],
        nextLabel: year - 1,
      },
      permalink: hrefs[index],
      items,
    });
  }

  return paginationData.toReversed();
};
