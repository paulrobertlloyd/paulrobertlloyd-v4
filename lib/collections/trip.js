import { getTripData } from "../utils/trip-data.js";

export const trip = (collection) => {
  const items = collection.getFilteredByGlob("src/content/trips/*.markdown");

  for (const item of items) {
    const tripData = getTripData(item.data)
    item.data = { ...item.data, ...tripData };
    item.data.properties.title = tripData.title
    item.data.properties.summary = tripData.summary
  }

  return items.reverse();
};
