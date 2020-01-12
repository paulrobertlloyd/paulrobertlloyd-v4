// Sitemap collection
module.exports = collection => {
  const indexable = item => {
    const {hidden, priority} = item.data;
    if ((hidden !== true) && (priority)) {
      return true;
    }
  };

  return collection.getAll().filter(indexable);
};
