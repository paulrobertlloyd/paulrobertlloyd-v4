module.exports = collection => collection.getFilteredByGlob('src/notes/*.markdown')
  .filter(item => item.date <= new Date());
