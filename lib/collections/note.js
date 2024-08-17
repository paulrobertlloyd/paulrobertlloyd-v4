export const note = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/notes/*.markdown")
    .filter((item) => item.date <= new Date())
    .reverse();

  for (const item of items) {
    const { published, timeZone } = item.data;

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

    item.data.pageTitle = `Note: ${datePublished}`;
  }

  return items;
};
