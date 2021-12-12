module.exports = collection => {
  return collection.getFilteredByTag('event')
    .filter(item => item.data.event.attended)
    .sort((a, b) => new Date(a.data.event.start) - new Date(b.data.event.start));
};
