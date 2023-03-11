const {decode} = require('pluscodes');
const airports = require('./places/airports.js');
const stations = require('./places/stations.js');
const ports = require('./places/ports.js');

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

  // Merge place databases
  const places = [
    ...airports,
    ...stations,
    ...ports,
  ];

  // Add place metadata and sort alphabetically
  return places
    .map(place => {
      // Get geo and place id from plus code
      place.geo = decode(place.address.plus_code);

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
