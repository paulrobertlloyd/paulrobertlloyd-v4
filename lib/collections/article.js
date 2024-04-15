export const article = (collection) => {
  const items = collection.getFilteredByGlob("src/content/articles/*.markdown");

  for (const item of items) {
    item.data.duotoneCardImage = true;
  }

  return items.reverse();
};
