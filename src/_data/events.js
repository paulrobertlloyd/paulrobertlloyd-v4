const process = require('node:process');
const eleventyFetch = require('@11ty/eleventy-fetch');
const ICalParser = require('ical-js-parser');
const {DateTime} = require('luxon');
const getMovieData = require('../../lib/utils/movie-data.js');

const {WEBCAL_TOKEN} = process.env;
const ENDPOINT = 'https://p28-caldav.icloud.com/published/2/';
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

module.exports = async function () {
  try {
    const ics = await eleventyFetch(`${ENDPOINT}${WEBCAL_TOKEN}`, {
      duration: '1d',
      type: 'text',
    });

    const {events} = ICalParser.default.toJSON(ics);

    const data = events.map(async event => {
      const item = {
        title: parseString(event.summary),
        location: {
          type: 'card',
        },
        rsvp: 'yes',
        content: false,
      };

      // Location (name and address)
      if (event.location) {
        const venue = event.location.split(/\u{5C}\u{6E}/u); // \n
        item.location.name = venue[0];

        const address = venue[1] ? venue[1].split(/\u{5C}\u{2C}\s?/u) : ''; // \,
        switch (address.length) {
          case 4: {
            item.location.street_address = address.at(0);
            item.location.locality = address.at(1);
            break;
          }

          case 5: {
            item.location.street_address = address.at(0);
            item.location.locality = address.at(1);
            item.location.region = address.at(2);
            break;
          }

          default: {
            item.location.street_address = address.at(0);
            break;
          }
        }

        if (address.length > 1) {
          item.location.postal_code = address.at(-2);
        }

        item.location.country_name = address.at(-1);
      } else {
        item.location.name = 'false';
      }

      // Location (geo)
      if (event.xAppleStructuredLocation) {
        const geoString = event.xAppleStructuredLocation.XTITLE;
        const {latitude, longitude} = geoString.match(REGEX_GEO).groups;

        item.location.latitude = Number(latitude);
        item.location.longitude = Number(longitude);
      }

      // Description
      if (event.description) {
        item.summary = parseString(event.description);

        if (item.summary === '') {
          delete item.summary;
        }
      }

      // Speaking event
      // Invitation to presentations@paulrobertlloyd.com indicates speaking event
      if (event?.attendee?.[1].EMAIL === 'presentations@paulrobertlloyd.com') {
        item.presented = true;
      }

      // Published
      if (event.created) {
        item.date = DateTime.fromISO(event.created.value).toISO();
      }

      // Start date time
      if (event.dtstart) {
        item.start = DateTime.fromISO(event.dtstart.value).toISO();
        item.time_zone = event.dtstart.timezone;
      }

      // End date time
      if (event.dtend) {
        item.end = DateTime.fromISO(event.dtend.value).toISO();
      }

      // URL
      if (event.url && event.url.VALUE.includes('URI:')) {
        item.url = event.url.VALUE.replace('URI:', '');

        if (item.url.includes('imdb.com')) {
          const movie = await getMovieData(item.url);

          item.icon = 'film';
          item.summary = movie.Plot || item.summary;
          item.content = `
            ![Poster for ‘${item.title}’](${movie.Poster})
            {.align-pull}\n\n
          `;
          item.content += [
            `Director\n: ${movie.Director}`,
            `Writer\n: ${movie.Writer}`,
            `Actors\n: ${movie.Actors}`,
          ].join('\n\n');
        }
      }

      return item;
    });

    return data;
  } catch (error) {
    console.warn(error.message);
  }
};
