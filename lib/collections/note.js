export const note = (collection) =>
  collection
    .getFilteredByGlob("src/content/notes/*.markdown")
    .filter((item) => item.date <= new Date())
    .reverse();
