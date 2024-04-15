export const attended = (collection) =>
  collection
    .getFilteredByTag("event")
    .filter((item) => new Date(item.data.end) <= new Date())
    .sort((a, b) => new Date(b.data.start) - new Date(a.data.start));
