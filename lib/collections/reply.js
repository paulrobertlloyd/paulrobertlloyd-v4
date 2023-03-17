module.exports = collection => collection.getFilteredByGlob('src/replies/*.md')
  .filter(item => item.date <= new Date());
