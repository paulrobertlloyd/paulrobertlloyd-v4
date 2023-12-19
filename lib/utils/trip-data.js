import { getDistance } from "geolib";
import { places } from "../places.js";

const modes = {
  airport: {
    color: "#c30",
    emissions: 0.158,
    icon: "plane",
  },
  port: {
    color: "#939",
    emissions: 0.4,
    icon: "ferry",
  },
  station: {
    color: "#f63",
    emissions: 0.032,
    icon: "train",
  },
  national_rail: {
    color: "#e60000",
    emissions: 0.032,
    icon: "national_rail",
  },
  hotel: {
    color: "#333",
    emissions: 0.173,
    icon: "car",
  },
};

const _location = (stop) => `${stop.locality}, ${stop.country_name}`;
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

  for (const [index, stop] of itinerary.entries()) {
    // Stop icon
    const thisPlace = _place(stop.label);
    const stopCategory = thisPlace?.category[0];
    stop.icon = modes[stopCategory].icon;

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
          stroke: modes[thisPlace.category[0]].color,
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

  const category = _place(itinerary[0].label)?.category[0];
  const emissions = Math.ceil(distance * modes[category].emissions);
  const title = `${_location(itinerary[0])} ➔ ${_location(itinerary.at(-1))}`;
  const summary = `A trip of ${distance} km that emitted roughly ${emissions} kg of CO₂.`;

  return {
    title,
    summary,
    distance,
    emissions,
    geojson,
    itinerary,
  };
};
