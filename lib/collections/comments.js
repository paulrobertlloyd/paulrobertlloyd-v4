export const comments = (collection) => {
  const items = collection.getFilteredByGlob("src/content/comments/*.markdown");

  for (const item of items) {
    const { comments } = item.data;
    const suffix = comments.length === 1 ? "comment" : "comments";

    item.data.summary = `${comments.length} ${suffix}`;
  }

  return items;
};
