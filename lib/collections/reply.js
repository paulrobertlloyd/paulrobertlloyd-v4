import { formatDateTime } from "../utils/date.js";

export const reply = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/replies/*.markdown")
    .filter((item) => item.date <= new Date())
    .toReversed();

  for (const item of items) {
    const { published, timeZone } = item.data;

    const datePublished = formatDateTime(published, timeZone);

    item.data.pageTitle = `Reply: ${datePublished}`;
  }

  return items;
};
