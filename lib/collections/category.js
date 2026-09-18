const _sortByFrequency = (array) => {
  const frequency = {};

  for (const value of array) {
    frequency[value] = 0;
  }

  return array
    .filter((value) => ++frequency[value] === 1)
    .toSorted((a, b) => a.localeCompare(b));
};

export const category = (collection) => {
  const tagSet = new Set();

  for (const item of collection.getAll()) {
    if ("category" in item.data) {
      for (const tag of item.data.category) {
        tagSet.add(tag);
      }
    }
  }

  return _sortByFrequency([...tagSet]);
};
