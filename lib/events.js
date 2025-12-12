import process from "node:process";
import eleventyFetch from "@11ty/eleventy-fetch";
import ICAL from "ical.js";
import { getColor } from "./utils/string.js";
import { getMovieData } from "./utils/omdb.js";

const { WEBCAL_TOKEN } = process.env;
const ENDPOINT = "https://p28-caldav.icloud.com/published/2/";

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

// eslint-disable-next-line unicorn/no-anonymous-default-export
export default async () => {
  try {
    const ics = await eleventyFetch(`${ENDPOINT}${WEBCAL_TOKEN}`, {
      duration: "1d",
      type: "text",
    });

    const calendar = ICAL.parse(ics.toString("utf8"));
    const component = new ICAL.Component(calendar);
    const vEvents = component.getAllSubcomponents("vevent");

    const data = vEvents.map(async (vEvent) => {
      const event = new ICAL.Event(vEvent);

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
        const [name, location] = event.location.split("\n");
        const address = location.split(", ");

        // If one value found for venue, no venue name given, only address
        item.location.name = name || address[0];

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

      // Description
      if (event.description) {
        item.summary = parseString(event.description);

        if (item.summary === "") {
          delete item.summary;
        }
      }

      // Start date time
      if (event.startDate) {
        item.start = event.startDate.toString();
        item.timeZone = event.startDate.zone.tzid;
      }

      // End date time
      if (event.endDate) {
        item.end = event.endDate.toString();
      }

      // URL
      const urlMatch = event.toString().match(/^URL:(.+)$/m);
      event.url = urlMatch ? urlMatch[1].trim() : undefined;

      if (event.url) {
        const url = new URL(event.url);

        if (url) {
          item.uid = url.href;
        }

        if (url?.hostname.includes("imdb.com")) {
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
