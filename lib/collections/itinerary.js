import { getColor } from "../utils/string.js";
import { getGeojson } from "../utils/collection.js";
import { getImage } from "../utils/image.js";
import { getMapboxUrl } from "../utils/mapbox.js";
import { getPost } from "../utils/post.js";
import { trip } from "./trip.js";

/**
 * Index trips by the itinerary tags they belong to
 * @param {Array} trips - Trip collection, oldest first
 * @returns {Map<string, Array>} Trips keyed by tag, order preserved
 */
const groupTripsByTag = (trips) => {
  const index = new Map();

  for (const item of trips) {
    if (item.data.type !== "trip") {
      continue;
    }

    const tags = item.data.tags ?? [];

    for (const tag of tags) {
      const tagged = index.get(tag) ?? [];
      tagged.push(item);
      index.set(tag, tagged);
    }
  }

  return index;
};

export const itinerary = async (collection) => {
  const items = collection
    .getFilteredByGlob("src/content/itineraries/*.markdown")
    .toReversed();

  const tripsByTag = groupTripsByTag(trip(collection));

  for (const item of items) {
    const { id, shortPath } = getPost(item.data);
    const trips = tripsByTag.get(id) ?? [];

    if (trips.length === 0) {
      continue;
    }

    const start = trips[0].data.start;
    const end = trips[0].data.end || trips.at(-1).data.start;

    item.data.start = start;
    item.data.end = end;
    item.data.color = getColor(trips.at(-1).data?.itinerary[0].locality);
    const geojson = getGeojson(trips);
    const source = getMapboxUrl(geojson, geojson._height, geojson._width);
    const outputDirectory = shortPath;
    const featured = await getImage(source, outputDirectory, "route_map");

    item.data.featured = featured;
  }

  return items;
};
