module.exports = collection => {
  return collection.getFilteredByGlob('**/events/**/*.md').filter(item => {
    const date = new Date(item.data.start).getTime();
    const now = new Date().getTime();
    return (date > now ? item : false);
  });
};
