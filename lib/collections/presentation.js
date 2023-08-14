module.exports = (collection) => {
  const items = collection.getFilteredByGlob(
    "src/content/presentations/*.markdown",
  );

  for (const item of items) {
    item.data.duotoneCardImage = true;
  }

  return items.reverse();
};
