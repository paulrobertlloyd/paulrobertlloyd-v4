export const jam = (collection) =>
  collection
    .getFilteredByGlob("src/content/jams/*.markdown")
    .filter((item) => item.date <= new Date())
    .reverse();
