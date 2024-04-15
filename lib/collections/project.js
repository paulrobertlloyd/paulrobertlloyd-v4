export const project = (collection) =>
  collection.getFilteredByGlob("src/content/projects/*.markdown").reverse();
