export const jam = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/jams/*.markdown")
    .filter((item) => item.date <= new Date())
    .reverse();

  for (const item of items) {
    const { jam_of } = item.data;

    item.data.title = `♫ ${jam_of.name} by ${jam_of.author}`;
    item.data.properties.title = `♫ ${jam_of.name} by ${jam_of.author}`;
  }

  return items;
};
