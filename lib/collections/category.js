const _sortByFrequency = (array) => {
  const frequency = {};

  for (const value of array) {
    frequency[value] = 0;
  }

  return array.filter((value) => ++frequency[value] === 1).sort();
};

module.exports = (collection) => {
  const categoryArray = [];

  for (const item of collection.getAll()) {
    if ("category" in item.data) {
      const categories = item.data.category;
      for (const category of categories) {
        categoryArray.push(category);
      }
    }
  }

  return _sortByFrequency(categoryArray);
};
