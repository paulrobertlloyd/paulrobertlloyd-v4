import process from "node:process";
import eleventyFetch from "@11ty/eleventy-fetch";
import ICalParser from "ical-js-parser";
import { DateTime } from "luxon";
import { getColor } from "./utils/string.js";
import { getMovieData } from "./utils/omdb.js";

const { WEBCAL_TOKEN } = process.env;
const ENDPOINT = "https://p28-caldav.icloud.com/published/2/";
const REGEX_GEO = /geo:(?<latitude>[+-]?\d*\.\d+),(?<longitude>[+-]?\d*\.\d+)/;

/**
 * Parse iCal text string
 * @param {string} string - String to parse
 * @returns {string} Parsed string
 */
function parseString(string) {
  return (
    string
      // eslint-disable-next-line unicorn/prefer-string-replace-all
      .replaceAll(/\u{5C}\u{6E}/gu, "\n") // New lines (\n)
      .replaceAll(/\u{5C}(\W{1})/gu, "$1") // Punctuation (\, \;)
  );
}

/**
 * Parse iCal URI string
 * @param {string} string - URI string to parse
 * @returns {URL|undefined} URL
 */
function parseUri(string) {
  let url = string.replace("URI:", "");

  if (URL.canParse(url)) {
    url = new URL(url);

    if (url.protocol.includes("http")) {
      return new URL(url);
    }
  }
}

// eslint-disable-next-line unicorn/no-anonymous-default-export
export default async () => {
  try {
    const ics = await eleventyFetch(`${ENDPOINT}${WEBCAL_TOKEN}`, {
      duration: "1d",
      type: "text",
    });

    const { events } = ICalParser.default.toJSON(ics);

    const data = events.map(async (event) => {
      const item = {
        title: parseString(event.summary),
        location: {
          type: "card",
        },
        rsvp: "yes",
        type: "event",
        typeIndex: 1,
        typePrefix: "e",
        vocabulary: "event",
        content: false,
      };

      // Location (name and address)
      if (event.location) {
        const location = event.location.split(/\u{5C}\u{6E}/u); // \n

        // If one value found for venue, no venue name given, only address
        const noVenue = location.length === 1;
        item.location.name = noVenue ? "" : location[0];
        let addressString = noVenue ? location[0] : location[1];

        const address = addressString
          ? addressString.split(/\u{5C}\u{2C}\s?/gu)
          : ""; // \,

        switch (address.length) {
          case 4: {
            item.location.streetAddress = address.at(0);
            item.location.locality = address.at(1);
            item.location.postalCode = address.at(2);
            item.location.countryName = address.at(-1);
            break;
          }

          case 5: {
            item.location.streetAddress = address.at(0);
            item.location.locality = address.at(1);
            item.location.region = address.at(2);
            item.location.postalCode = address.at(3);
            item.location.countryName = address.at(-1);
            break;
          }

          default: {
            item.location.streetAddress = address.at(0);
            item.location.countryName = address.at(-1);
            break;
          }
        }
      } else {
        item.location.name = false;
      }

      // Location (geo)
      if (event.xAppleStructuredLocation) {
        const geoString = event.xAppleStructuredLocation.XTITLE;
        const { latitude, longitude } = geoString.match(REGEX_GEO).groups;

        item.location.latitude = Number(latitude);
        item.location.longitude = Number(longitude);
      }

      // Description
      if (event.description) {
        item.summary = parseString(event.description);

        if (item.summary === "") {
          delete item.summary;
        }
      }

      // Start date time
      if (event.dtstart) {
        item.start = DateTime.fromISO(event.dtstart.value).toISO();
        item.timeZone = event.dtstart.timezone;
      }

      // End date time
      if (event.dtend) {
        item.end = DateTime.fromISO(event.dtend.value).toISO();
      }

      // URL
      if (event.url) {
        const uid = parseUri(event.url.VALUE);

        if (uid) {
          item.uid = uid.href;
        }

        if (uid?.hostname.includes("imdb.com")) {
          const movie = await getMovieData(item.uid);

          item.icon = "film";
          item.summary = movie.Plot || item.summary;
          item.content = `<figure class="align-pull"><img src="${movie.Poster}" alt="Poster for ‘${item.title}’" eleventy:ignore></figure>\n\n`;
          item.content += [
            `Director\n: ${movie.Director}`,
            `Writer\n: ${movie.Writer}`,
            `Actors\n: ${movie.Actors}`,
          ].join("\n\n");
        }
      }

      item.published = item.start;

      item.color = getColor(item.start);

      return item;
    });

    return data;
  } catch (error) {
    console.warn(error.message);

    return [];
  }
};
