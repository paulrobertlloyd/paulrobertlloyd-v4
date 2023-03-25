module.exports = collection => collection
  .getFilteredByGlob('src/content/replies/*.markdown')
  .filter(item => item.date <= new Date())
  .reverse();
