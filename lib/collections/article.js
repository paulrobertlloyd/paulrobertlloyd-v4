export const article = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/articles/*.markdown")
    .reverse();

  for (const item of items) {
    const { app, canonical, page } = item.data;

    item.data.canonical_url = canonical?.url || app.url + page.url;
    item.data.duotoneCardImage = true;
  }

  return items;
};
