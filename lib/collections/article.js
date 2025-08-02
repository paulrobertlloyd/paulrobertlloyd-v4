export const article = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/articles/*.markdown")
    .toReversed();

  for (const item of items) {
    const { app, canonical, page } = item.data;

    item.data.canonicalUrl = canonical?.url || app.url + page.url;
  }

  return items;
};
