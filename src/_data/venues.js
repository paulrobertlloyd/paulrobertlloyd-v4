const {decode} = require('pluscodes');
const venuesData = require('./venues-data.json');

module.exports = function () {
  return venuesData.map(venue => {
    const fileSlug = venue.address['plus-code'].toLowerCase();

    return {
      date: new Date(),
      fileSlug,
      url: `/events/venues/${fileSlug}`,
      data: {
        layout: 'venue',
        title: venue.title,
        url: venue.url,
        address: venue.address,
        geo: decode(venue.address['plus-code'])
      }
    };
  });
};
