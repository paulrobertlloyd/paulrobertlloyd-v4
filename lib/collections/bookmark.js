export const bookmark = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/bookmarks/*.markdown")
    .reverse();

  for (const item of items) {
    const { bookmark_of, title } = item.data;
    const providers = ["youtube.com", "vimeo.com"];

    if (providers.some((provider) => bookmark_of.includes(provider))) {
      item.rawInput = `[${title}](${bookmark_of})\n${item.rawInput}`;
    }
  }

  return items;
};
