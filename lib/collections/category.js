const _sortByFrequency = (array) => {
  const frequency = {};

  for (const value of array) {
    frequency[value] = 0;
  }

  return array.filter((value) => ++frequency[value] === 1).toSorted();
};

export const category = (collection) => {
  let tagSet = new Set();

  collection.getAll().map((item) => {
    if ("category" in item.data) {
      for (const tag of item.data.category) {
        tagSet.add(tag);
      }
    }
  });

  return _sortByFrequency([...tagSet]);
};
