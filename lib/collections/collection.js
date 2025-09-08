export const collection = (collection) =>
  collection
    .getFilteredByGlob("src/content/collections/*.markdown")
    .toSorted((a, b) => a.data.title.localeCompare(b.data.title));
