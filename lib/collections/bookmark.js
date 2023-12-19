export default (collection) =>
  collection.getFilteredByGlob("src/content/bookmarks/*.markdown").reverse();
