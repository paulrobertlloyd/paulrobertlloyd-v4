module.exports = collection => {
  const now = new Date();
  const attended = item => item.data.date < now;

  return collection.getFilteredByTag('event').filter(attended);
};
