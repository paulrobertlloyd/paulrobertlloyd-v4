import { formatDateTime } from "../utils/date.js";

export const note = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/notes/*.markdown")
    .filter((item) => item.date <= new Date())
    .toReversed();

  for (const item of items) {
    const { published, timeZone } = item.data;

    const datePublished = formatDateTime(published, timeZone);

    item.data.pageTitle = `Note: ${datePublished}`;
  }

  return items;
};
