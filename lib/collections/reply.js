export const reply = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/replies/*.markdown")
    .filter((item) => item.date <= new Date())
    .reverse();

  for (const item of items) {
    const { published, time_zone: timeZone } = item.data;

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

    item.data.page_title = `Reply: ${datePublished}`;
  }

  return items;
};
