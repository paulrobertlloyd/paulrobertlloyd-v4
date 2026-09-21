import { formatDateTime } from "../utils/date.js";

export const drawing = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/drawings/*.markdown")
    .filter((item) => item.date <= new Date())
    .toReversed();

  for (const item of items) {
    const { photo, published, timeZone } = item.data;

    const datePublished = formatDateTime(published, timeZone);

    let prefix = photo.length === 1 ? "drawing" : "drawings";
    prefix &&= prefix[0].toUpperCase() + prefix.slice(1);

    item.data.pageTitle = `${prefix}: ${datePublished}`;

    if (photo.length > 1) {
      item.data.icon = "photos";
      item.data.iconLabel = `${photo.length} drawings in this post`;

      let photos = "";
      for (let { alt, url } of photo) {
        photos += `- ![${alt}](${url})\n`;
      }
      item.rawInput = `${photos}\n\n${item.rawInput}`;
    } else {
      let { alt, url } = photo[0];
      item.rawInput = `![${alt}](${url})\n\n${item.rawInput}`;
    }
  }

  return items;
};
