export const category = (collection) => {
  const tagSet = new Set();

  for (const item of collection.getAll()) {
    if ("category" in item.data) {
      for (const tag of item.data.category) {
        tagSet.add(tag);
      }
    }
  }

  return [...tagSet].toSorted((a, b) => a.localeCompare(b));
};
