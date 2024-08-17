import { getColor } from "../utils/string.js";
import { getGeojson } from "../utils/collection.js";
import { getImage } from "../utils/image.js";
import { getMapboxUrl } from "../utils/mapbox.js";
import { getId, getPermalink } from "../utils/page.js";
import { trip } from "./trip.js";

export const itinerary = async (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/itineraries/*.markdown")
    .reverse();

  for (const item of items) {
    const id = getId(item.data);

    const trips = trip(collection)
      .filter((item) => item.data?.tags?.includes(id))
      .filter((item) => item.data.type === "trip");

    const start = trips[0].data.start;
    const end = trips[0].data.end || trips.at(-1).data.start;

    item.data.start = start;
    item.data.end = end;
    item.data.color = getColor(trips.at(-1).data?.itinerary[0].locality);

    if (trips.length > 0) {
      const geojson = getGeojson(trips);
      const source = getMapboxUrl(geojson, geojson._height, geojson._width);
      const outputDirectory = getPermalink(item.data);
      const featured = await getImage(source, outputDirectory, "route_map");

      item.data.featured = featured;
    }
  }

  return items;
};
