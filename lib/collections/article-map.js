export const article_map = (collection) =>
  collection
    .getFilteredByGlob("src/content/articles/*.markdown")
    .filter((item) => item.data.geojson);
