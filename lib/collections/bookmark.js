export const bookmark = (collection) =>
  collection.getFilteredByGlob("src/content/bookmarks/*.markdown").reverse();
