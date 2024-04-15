export const comments = (collection) =>
  collection.getFilteredByGlob("src/content/comments/*.markdown");
