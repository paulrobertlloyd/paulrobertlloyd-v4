import { getColor } from "./string.js";
import { getDistance } from "geolib";
import { places } from "../places.js";
import { transit } from "../transit.js";

const _place = (label) => places.find((place) => place.name === label);

/**
 * Decorate trip data
 * @param {object} trip - Trip data
 * @returns {object} Decorated trip data
 */
export const getTripData = (trip) => {
  let distance = 0;
  const { itinerary } = trip;
  const geojson = {
    type: "FeatureCollection",
    features: [],
  };
  const year = new Date(trip.start).getFullYear();
  const icons = [];

  for (const [index, stop] of itinerary.entries()) {
    // Stop icon
    const thisPlace = _place(stop.label);
    const stopCategory = thisPlace?.category[0];
    stop.icon = transit[stopCategory].icon;
    icons.push(stop.icon);

    const nextStop = itinerary[index + 1];
    if (nextStop) {
      const nextPlace = _place(nextStop.label);

      // Calculate distance
      const legDistance = getDistance(thisPlace.geo, nextPlace.geo);
      distance += legDistance;

      // Build GeoJSON
      const feature = {
        type: "Feature",
        properties: {
          stroke: transit[thisPlace.category[0]].color,
          "stroke-opacity": 0.75,
          "stroke-width": 4,
        },
        geometry: {
          type: "LineString",
          coordinates: [
            [thisPlace.geo.longitude, thisPlace.geo.latitude],
            [nextPlace.geo.longitude, nextPlace.geo.latitude],
          ],
        },
      };

      geojson.features.push(feature);
    }
  }

  distance = Math.ceil(distance / 1000);

  let changes;
  switch (itinerary.length) {
    case 2: {
      changes = "Direct";
      break;
    }
    case 3: {
      changes = "1\u00A0change";
      break;
    }
    default: {
      changes = `${itinerary.length - 2}\u00A0changes`;
    }
  }

  const category = _place(itinerary[0].label)?.category[0];
  const emissions = Math.ceil(distance * transit[category].emissions);
  const title = `${itinerary[0].locality} to ${itinerary.at(-1).locality}`;
  const summary = `${changes} · ${distance}\u00A0km · ${emissions}\u00A0kg\u00A0CO₂`;
  const icon = icons[0];
  const color = getColor(itinerary.at(-1).locality);

  return {
    title,
    summary,
    color,
    icon,
    distance,
    emissions,
    geojson,
    itinerary,
    year,
  };
};
