import { formatPublishedDate } from "../utils/date.js";

export const photo = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/photos/*.markdown")
    .filter((item) => item.date <= new Date())
    .toReversed();

  for (const item of items) {
    const { photo, published, timeZone } = item.data;

    const datePublished = formatPublishedDate(published, timeZone);

    let prefix = photo.length === 1 ? "photo" : "photos";
    prefix &&= prefix[0].toUpperCase() + prefix.slice(1);

    item.data.pageTitle = `${prefix}: ${datePublished}`;

    if (photo.length > 1) {
      item.data.icon = "photos";
      item.data.iconLabel = `${photo.length} photos in this post`;

      for (let { alt, url } of photo) {
        item.rawInput += `- ![${alt}](${url}){.u-photo}\n`;
      }
    } else {
      let { alt, url } = photo[0];
      item.rawInput += `\n\n![${alt}](${url}){.u-photo}`;
    }
  }

  return items;
};
