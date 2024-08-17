import { getTripData } from "../utils/trip-data.js";

export const trip = (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/trips/*.markdown")
    .sort((a, b) => new Date(b.data.start) - new Date(a.data.start));

  for (const item of items) {
    const tripData = getTripData(item.data);
    item.data = { ...item.data, ...tripData };
    item.data.properties.title = tripData.title;
    item.data.properties.summary = tripData.summary;
    item.data.properties.icon = tripData.icon;
    item.data.properties.color = tripData.color;
  }

  return items.reverse();
};
