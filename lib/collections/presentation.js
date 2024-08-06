export const presentation = (collection) =>
  collection
    .getFilteredByGlob("src/content/presentations/*.markdown")
    .reverse();
