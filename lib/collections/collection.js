module.exports = (collection) =>
  collection
    .getFilteredByGlob("src/content/collections/*.markdown")
    .sort((a, b) => a.data.title.localeCompare(b.data.title));
