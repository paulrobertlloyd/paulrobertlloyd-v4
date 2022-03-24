const EleventyFetch = require('@11ty/eleventy-fetch');
const {encode} = require('pluscodes');
const ical = require('node-ical');
const slugify = require('@sindresorhus/slugify');

/**
 * Convert date to ISO8601
 *
 * @param {Date} date
 * @returns
 */
function _timeZoneDateToISO (date) {
  return new Date(date).toLocaleString('sv', {
    timeZone: date.tz
  }).replace(' ', 'T');
}

module.exports = async function () {
  const ENDPOINT = 'https://p28-caldav.icloud.com/published/2/';
  const TOKEN = process.env.WEBCAL_TOKEN;
  const url = `${ENDPOINT}${TOKEN}`;

  try {
    const ics = await EleventyFetch(url, {
      duration: '1d',
      type: 'text',
    });

    const calendar = await ical.async.parseICS(ics);
    const items = Object.values(calendar);
    const events = items.filter(event => event.type === 'VEVENT').map(event => {
      // Get Plus Code by encoding latitude and longitude
      if (event['APPLE-STRUCTURED-LOCATION']) {
        const geoString = event['APPLE-STRUCTURED-LOCATION'].val;
        const geoRegex = /geo:(?<latitude>[+-]?\d*\.\d+),(?<longitude>[+-]?\d*\.\d+)/;
        const {latitude, longitude} = geoString.match(geoRegex).groups;
        event['plus-code'] = encode({latitude, longitude});
      }

      // Get category tags from hashtags in event description
      if (event.description) {
        const {description} = event
        const hashtagRegex = /^#(?:[\w\d\-\_\s])+$/gm;
        let hashtags = description.match(hashtagRegex);
        if (hashtags) {
          event.category = hashtags.map(tag => tag.replace('#', ''))
          event.description = description.replace(hashtagRegex, '')
        }
      }

      // Some events have URLs with no value
      if (event.url && event.url.val === '') {
        delete event.url
      }

      // Event data
      return {
        title: event.summary,
        slug: slugify(event.summary, { separator: '_' }),
        date: _timeZoneDateToISO(event.created),
        ...(event.url && {url: event.url.val}),
        ...(event.description && {summary: event.description}),
        start: _timeZoneDateToISO(event.start),
        end: _timeZoneDateToISO(event.end),
        attended: new Date(event.end) < new Date(),
        rsvp: 'yes',
        category: event.category,
        ...(event['plus-code'] && {placeId: event['plus-code']}),
      };
    });

    return events;
  } catch (error) {
    console.warn(error.message);
  }
};
