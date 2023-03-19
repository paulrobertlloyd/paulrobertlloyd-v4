module.exports = collection => collection.getFilteredByGlob('src/replies/*.markdown')
  .filter(item => item.date <= new Date());
