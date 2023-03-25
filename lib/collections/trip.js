module.exports = collection => collection
  .getFilteredByGlob('src/content/trips/*.markdown')
  .reverse();
