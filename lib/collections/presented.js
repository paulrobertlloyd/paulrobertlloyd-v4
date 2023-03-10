module.exports = collection =>
  collection.getFilteredByTag('event')
    .filter(item => item.data.event.presented)
    .sort((a, b) => new Date(b.data.event.start) - new Date(a.data.event.start));
