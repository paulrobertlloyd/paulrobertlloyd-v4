module.exports = collection => collection.getFilteredByGlob('src/notes/*.md')
  .filter(item => item.date <= new Date());
