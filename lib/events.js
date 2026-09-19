import process from "node:process";
import eleventyFetch from "@11ty/eleventy-fetch";
import ICAL from "ical.js";
import { getColor } from "./utils/string.js";
import { getMovieData } from "./utils/omdb.js";

/**
 * Get location from an event’s location value
 * @param {string} [value] - Venue name and address, separated by a newline
 * @returns {object} Location
 */
const getLocation = (value) => {
  const location = { type: "card" };

  if (!value) {
    location.name = false;
    return location;
  }

  const [name, address] = value.split("\n", 2);

  if (!address) {
    location.name = name;
    return location;
  }

  const parts = address.split(", ");
  location.name = name || parts[0];

  switch (parts.length) {
    case 4: {
      location.streetAddress = parts[0];
      location.locality = parts[1];
      location.postalCode = parts[2];
      location.countryName = parts.at(-1);
      break;
    }

    case 5: {
      location.streetAddress = parts[0];
      location.locality = parts[1];
      location.region = parts[2];
      location.postalCode = parts[3];
      location.countryName = parts.at(-1);
      break;
    }

    default: {
      location.streetAddress = parts[0];
      location.countryName = parts.at(-1);
    }
  }

  return location;
};

/**
 * Add movie details to an event linked to IMDb
 * @param {object} item - Event, modified in place
 * @param {string} url - IMDb URL
 */
const addMovieData = async (item, url) => {
  const movie = await getMovieData(url);

  item.icon = "film";
  item.summary = movie.Plot || item.summary;
  item.content = `<figure class="align-pull"><img src="${movie.Poster}" alt="Poster for ‘${item.title}’" eleventy:ignore></figure>\n\n`;
  item.content += [
    `Director\n: ${movie.Director}`,
    `Writer\n: ${movie.Writer}`,
    `Actors\n: ${movie.Actors}`,
  ].join("\n\n");
};

/**
 * Get an event from a VEVENT component
 * @param {object} vEvent - VEVENT component
 * @returns {Promise<object>} Event
 */
const getEvent = async (vEvent) => {
  const event = new ICAL.Event(vEvent);

  const item = {
    title: event.summary,
    location: getLocation(event.location),
    rsvp: "yes",
    type: "event",
    content: false,
    ...(event.description && { summary: event.description }),
    ...(event.startDate && {
      start: event.startDate.toString(),
      timeZone: event.startDate.zone.tzid,
    }),
    ...(event.endDate && { end: event.endDate.toString() }),
  };

  const url = vEvent.getFirstPropertyValue("url");

  if (url) {
    const { href, hostname } = new URL(url);
    item.uid = href;

    if (hostname.includes("imdb.com")) {
      await addMovieData(item, href);
    }
  }

  item.published = item.start;
  item.color = getColor(item.start);

  return item;
};

// eslint-disable-next-line unicorn/no-anonymous-default-export
export default async () => {
  try {
    const { WEBCAL_TOKEN } = process.env;
    const ENDPOINT = "https://p28-caldav.icloud.com/published/2/";
    const ics = await eleventyFetch(`${ENDPOINT}${WEBCAL_TOKEN}`, {
      duration: "1d",
      type: "text",
    });

    const calendar = new ICAL.Component(ICAL.parse(ics.toString("utf8")));

    return await Promise.all(
      calendar.getAllSubcomponents("vevent").map((vEvent) => getEvent(vEvent)),
    );
  } catch (error) {
    console.warn(`Could not build events: ${error.message}`);
    return [];
  }
};
