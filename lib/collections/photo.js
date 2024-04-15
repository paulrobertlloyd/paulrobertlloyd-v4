export const photo = (collection) =>
  collection
    .getFilteredByGlob("src/content/photos/*.markdown")
    .filter((item) => item.date <= new Date())
    .reverse();
