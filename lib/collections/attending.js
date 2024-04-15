export const attending = (collection) =>
  collection
    .getFilteredByTag("event")
    .filter((item) => new Date(item.data.end) >= new Date())
    .sort((a, b) => new Date(a.data.start) - new Date(b.data.start));
