import { geojson } from "../utils/geojson.js";
import { permalink } from "../filters/permalink.js";
import { route_map } from "../utils/route-map.js";
import { getId } from "../utils/id.js";
import { trip } from "./trip.js";

export const itinerary = async (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/itineraries/*.markdown")
    .reverse();

  for (const item of items) {
    const id = getId(item.data);

    const trips = trip(collection).filter((item) =>
      item.data?.tags?.includes(id),
    );

    const start = trips[0].data.start;
    const end = trips[0].data.end || trips.at(-1).data.start;

    item.data.start = start;
    item.data.end = end;

    item.data.properties.start = start;
    item.data.properties.end = end;

    if (trips.length > 0) {
      const featured = await route_map(geojson(trips), permalink(item.data));
      item.data.featured = featured;
    }
  }

  return items;
};
