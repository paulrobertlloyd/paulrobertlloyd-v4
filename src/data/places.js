const {decode} = require('pluscodes');
const airports = require('./places/airports');
const stations = require('./places/stations');
const ports = require('./places/ports');
const venues = require('./places/venues');

module.exports = function () {
  // Add airport metadata
  airports.forEach(airport => {
    airport.type = 'airport';
    airport.icon = 'plane';
    return airport;
  });

  // Add station metadata
  stations.forEach(station => {
    station.type = 'station';
    station.icon = station.icon || 'train';
    return station;
  });

  // Add port metadata
  ports.forEach(port => {
    port.type = 'port';
    port.icon = 'ferry';
    return port;
  });

  // Add venue metadata
  venues.forEach(venue => {
    venue.type = 'venue';
    return venue;
  });

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
