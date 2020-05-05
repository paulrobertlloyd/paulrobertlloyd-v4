module.exports = collection => {
  const now = new Date();
  const attending = item => item.date > now;

  return collection.getFilteredByTag('event').filter(attending);
};
