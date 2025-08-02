import { getResolvedMediaPath } from "../utils/image.js";

export const drawing = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/drawings/*.markdown")
    .filter((item) => item.date <= new Date())
    .toReversed();

  for (const item of items) {
    const { photo, published, timeZone } = item.data;

    const datePublished = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hourCycle: "h12",
      timeZone,
      ...(timeZone && {
        timeZoneName: "shortGeneric",
      }),
    }).format(published);

    let prefix = photo.length === 1 ? "drawing" : "drawings";
    prefix = prefix && prefix[0].toUpperCase() + prefix.slice(1);

    item.data.pageTitle = `${prefix}: ${datePublished}`;

    if (photo.length > 1) {
      item.data.icon = "photos";
      item.data.iconLabel = `${photo.length} drawings in this post`;

      let photos = "";
      for (let { alt, url } of photo) {
        url = getResolvedMediaPath(url);
        photos += `- ![${alt}](${url})\n`;
      }
      item.rawInput = `${photos}\n\n${item.rawInput}`;
    } else {
      let { alt, url } = photo[0];
      url = getResolvedMediaPath(url);
      item.rawInput = `![${alt}](${url})\n\n${item.rawInput}`;
    }
  }

  return items;
};
