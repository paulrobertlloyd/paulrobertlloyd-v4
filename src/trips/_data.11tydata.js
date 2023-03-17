const getDistance = require('../../lib/utils/get-distance.js');
const getEmissions = require('../../lib/utils/get-emissions.js');
const getGeoJSON = require('../../lib/utils/get-geojson.js');
const modes = require('../_data/modes.js');

const isGreatBritain = country =>
  ['England', 'Scotland', 'Wales'].includes(country);

module.exports = {
  layout: 'trip',
  type_prefix: 't',
  type: 'entry',
  tags: ['trip'],
  vocab: 'event',
  changefreq: 'monthly',
  priority: 0.8,
  visibility: 'unlisted',
  eleventyComputed: {
    permalink: data => `trips/${data.uid}/`,
    title: data => `${data.itinerary[0].locality}, ${data.itinerary[0].country_name} ➔ ${data.itinerary.at(-1).locality}, ${data.itinerary.at(-1).country_name}`,
    summary: data => `A trip of ${data.distance} km that emitted roughly ${data.co2} kg of CO₂.`,
    geojson: data => getGeoJSON(data.itinerary),
    distance: data => getDistance(data.itinerary),
    co2: data => getEmissions(data.itinerary, data.distance),
    stops: data => data.itinerary.map(stop => {
      stop.icon = isGreatBritain(stop.country_name) && stop.category === 'station'
        ? 'national_rail'
        : modes[stop.category].icon;

      return stop;
    }),
  },
};
