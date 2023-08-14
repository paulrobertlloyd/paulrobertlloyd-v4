module.exports = (collection) =>
  collection
    .getFilteredByTag("event")
    .filter((item) => item.data.presented)
    .sort((a, b) => new Date(b.data.start) - new Date(a.data.start));
