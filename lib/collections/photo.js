import { formatDateTime } from "../utils/date.js";
import { capitalise, pluralName, pluralise } from "../utils/string.js";

export const photo = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/photos/*.markdown")
    .filter((item) => item.date <= new Date())
    .toReversed();

  for (const item of items) {
    const { photo, published, timeZone, type } = item.data;
    const count = photo.length;
    const datePublished = formatDateTime(published, timeZone);
    const noun = pluralName(count, type);

    item.data.pageTitle = `${capitalise(noun)}: ${datePublished}`;

    if (count === 1) {
      continue;
    }

    item.data.icon = "photos";
    item.data.iconLabel = `${pluralise(count, type)} in this post`;
  }

  return items;
};
