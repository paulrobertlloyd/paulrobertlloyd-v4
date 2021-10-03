const {createEvents: formatEvents} = require('ics');

// TODO: Do this properly
const wrap = (string, at = 72) => {
  let result = string.slice(0, at);
  for (let i = at; i < string.length; i += at - 1) {
    result += '\r\n\t' + string.slice(i, i + at - 1);
  }

  return result;
};

const appleStructuredLocation = event => {
  if (!event.location) {
    return null;
  }

  if (!event.geo) {
    return null;
  }

  if (typeof event.geo.lat !== 'number') {
    return null;
  }

  if (typeof event.geo.lon !== 'number') {
    return null;
  }

  if (typeof event.geo.radius !== 'number') {
    return null;
  }

  return wrap([
    'X-APPLE-STRUCTURED-LOCATION;',
    'VALUE=URI;',
    `X-APPLE-RADIUS=${Math.trunc(event.geo.radius)};`,
    `X-TITLE="${event.location.replace(/\n/g, '\\n')}":`,
    `geo:${event.geo.lat.toFixed(6)},${event.geo.lon.toFixed(6)}`,
  ].join(''));
};

const generateIcs = (title, rawEvents, feedUrl = null) => {
  const events = rawEvents.map(event => {
    event = {...event};

    if (event.geo) {
      event.geo = {...event.geo};
      delete event.geo.radius;
    }

    return event;
  });

  let {error, value: ics} = formatEvents(events);

  ics = ics || '';
  if (error) {
    throw error;
  }

  // Per event, insert Apple-specific location markup
  for (const event of rawEvents) {
    const locMarkup = appleStructuredLocation(event);

    if (!locMarkup) {
      continue;
    }

    const startI = ics.indexOf(`\r\nUID:${event.uid}\r\n`);
    if (startI < 0) {
      continue;
    }

    const evL = ics.slice(startI).indexOf('\r\nEND:VEVENT\r\n');
    if (evL < 0) {
      continue;
    }

    ics = [
      ics.slice(0, startI + evL),
      '\r\n',
      locMarkup,
      ics.slice(startI + evL),
    ].join('');
  }

  // Add feed metadata
  // TODO: This is really brittle, make it more robust
  const methodPublish = '\r\nMETHOD:PUBLISH\r\n';
  const markerI = ics.indexOf(methodPublish);
  if (markerI >= 0) {
    const endI = markerI + methodPublish.length;
    ics = [
      ics.slice(0, endI),
      `X-WR-CALNAME:${title}\r\n`,
      feedUrl ? `X-ORIGINAL-URL:${feedUrl}\r\n` : '',
      ics.slice(endI),
    ].join('');
  }

  return ics;
};

// Format date as [yyyy, M, d, H, m, s]
const formatDate = date => [
  new Date(date).getFullYear(),
  new Date(date).getMonth() + 1,
  new Date(date).getDate(),
  new Date(date).getHours(),
  new Date(date).getMinutes(),
  new Date(date).getSeconds(),
];

/**
 * Generate an iCalendar file
 *
 * @param {Array} collection Collection to use
 * @param {object} app Application data
 * @returns {object} iCalendar file
 * @see https://icalendar.org/RFC-Specifications/iCalendar-RFC-5545/
 */
module.exports = async (collection, app) => {
  const events = collection.map(event => {
    const item = {
      uid: event.url,
      title: event.data.title,
      ...(event.data.summary && {description: event.data.summary}),
      ...(event.data.category && {categories: event.data.category}),
      ...(event.data.url && {url: event.data.url}),
      start: formatDate(event.data.start),
      end: formatDate(event.data.end),
      status: 'CONFIRMED',
      lastModified: formatDate(Date.now()),
    };

    if (event.data.place) {
      item.location = event.data.place.data.place.sructuredLocation;
      item.geo = {
        lat: event.data.place.data.place.geo.latitude,
        lon: event.data.place.data.place.geo.longitude,
        radius: 20,
      };
    }

    return item;
  });

  const feedUrl = `${app.url}/events.ics`;
  const ics = generateIcs('Events', events, feedUrl);

  return ics;
};
