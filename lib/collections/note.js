import { formatPublishedDate } from "../utils/date.js";

export const note = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/notes/*.markdown")
    .filter((item) => item.date <= new Date())
    .toReversed();

  for (const item of items) {
    const { published, timeZone } = item.data;

    const datePublished = formatPublishedDate(published, timeZone);

    item.data.pageTitle = `Note: ${datePublished}`;
  }

  return items;
};
