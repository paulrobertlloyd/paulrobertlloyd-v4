module.exports = collection => {
  const items = collection.getFilteredByGlob('src/presentations/**/*.md');

  for (const item of items) {
    item.data.duotoneCardImage = true;
  }

  return items;
};
