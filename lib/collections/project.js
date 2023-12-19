export default (collection) =>
  collection.getFilteredByGlob("src/content/projects/*.markdown").reverse();
