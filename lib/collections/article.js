module.exports = collection => {
  const items = collection.getFilteredByGlob('src/articles/**/*.markdown');

  for (const item of items) {
    item.data.duotoneCardImage = true;
  }

  return items;
};
