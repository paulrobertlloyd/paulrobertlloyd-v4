export const jam = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/jams/*.markdown")
    .filter((item) => item.date <= new Date())
    .toReversed();

  for (const item of items) {
    const { jamOf } = item.data;

    item.data.title = `♫ ${jamOf.name} by ${jamOf.author}`;
  }

  return items;
};
