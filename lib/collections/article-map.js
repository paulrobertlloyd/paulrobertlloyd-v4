export default (collection) =>
  collection
    .getFilteredByGlob("src/content/articles/*.markdown")
    .filter((item) => item.data.geojson);
