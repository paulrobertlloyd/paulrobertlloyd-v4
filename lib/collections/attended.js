module.exports = collection => {
  const now = new Date();

  return collection.getFilteredByTag('event').filter(item => item.date < now);
};
