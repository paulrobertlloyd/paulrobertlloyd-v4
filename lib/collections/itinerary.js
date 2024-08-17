import { getColor } from "../utils/color.js";
import { getGeojson } from "../utils/geojson.js";
import { getPermalink } from "../utils/permalink.js";
import { getRouteMap } from "../utils/route-map.js";
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

    item.data.color = getColor(trips.at(-1).data?.itinerary[0].locality);

    if (trips.length > 0) {
      const featured = await getRouteMap(
        getGeojson(trips),
        getPermalink(item.data),
      );
      item.data.featured = featured;
    }
  }

  return items;
};
