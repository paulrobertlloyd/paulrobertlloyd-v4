const {decode} = require('pluscodes');
const airports = require('./places/airports.js');
const stations = require('./places/stations.js');
const ports = require('./places/ports.js');
const venues = require('./places/venues.js');

module.exports = function () {
  // Add airport metadata
  for (const airport of airports) {
    airport.type = 'airport';
    airport.icon = 'plane';
  }

  // Add station metadata
  for (const station of stations) {
    station.type = 'station';
    station.icon = station.icon || 'train';
  }

  // Add port metadata
  for (const port of ports) {
    port.type = 'port';
    port.icon = 'ferry';
  }

  // Add venue metadata
  for (const venue of venues) {
    venue.type = 'venue';
  }

  // Merge place databases
  const places = [
    ...airports,
    ...stations,
    ...ports,
    ...venues,
  ];

  // Add place metadata and sort alphabetically
  return places
    .map(place => {
      place.index = place.title.charAt(0).toLowerCase();

      // Get address as a formatted string
      place.sructuredLocation = `${place.title}\n${place.address['street-address']}, ${place.address['postal-code']}, ${place.address['country-name']}`;

      // Get geo and place id from plus code
      const plusCode = place.address['plus-code'];
      place.geo = decode(plusCode);
      place.id = plusCode.toLowerCase();

      return place;
    })
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }

      if (a.title < b.title) {
        return -1;
      }

      return 0;
    });
};
