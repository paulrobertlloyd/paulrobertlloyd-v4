import { getTripData } from "../utils/trip-data.js";

export default (collection) => {
  const items = collection.getFilteredByGlob("src/content/trips/*.markdown");

  for (const item of items) {
    item.data = { ...item.data, ...getTripData(item.data) };
  }

  return items.reverse();
};
