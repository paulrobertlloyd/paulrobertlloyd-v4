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

    if (trips.length > 0) {
      const featured = await route_map(geojson(trips), permalink(item.data));
      item.data.featured = featured;
    }
  }

  return items;
};
