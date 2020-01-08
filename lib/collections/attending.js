module.exports = collection => {
  const now = new Date();
  const attending = item => item.data.date > now;

  return collection.getFilteredByTag('event').filter(attending);
};
