export const photo = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/photos/*.markdown")
    .filter((item) => item.date <= new Date())
    .reverse();

  for (const item of items) {
    const { photo, published, time_zone: timeZone } = item.data;

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

    let prefix = photo.length === 1 ? "photo" : "photos";
    prefix = prefix && prefix[0].toUpperCase() + prefix.slice(1);

    item.data.page_title = `${prefix}: ${datePublished}`;
  }

  return items;
};
