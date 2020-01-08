module.exports = collection => {
  return collection.getFilteredByTag('event').filter(item => {
    const date = new Date(item.data.date).getTime();
    const now = new Date().getTime();
    return (date > now ? item : false);
  });
};
