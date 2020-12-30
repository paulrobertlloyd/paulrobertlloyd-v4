const _sortByFrequency = array => {
  const frequency = {};

  array.forEach(value => {
    frequency[value] = 0;
  });

  const uniques = array.filter(value => {
    return ++frequency[value] === 1;
  });

  return uniques.sort((a, b) => {
    return frequency[b] - frequency[a];
  });
};

module.exports = collection => {
  const categoryArray = [];
  collection.getAll().forEach(item => {
    if ('category' in item.data) {
      const categories = item.data.category;
      for (const category of categories) {
        categoryArray.push(category);
      }
    }
  });

  return _sortByFrequency(categoryArray);
};
