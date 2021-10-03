module.exports = {
  layout: 'travel',
  type: 'entry',
  permalink: 'travel/{{ page.date | date: "yyyy/MM" }}/{{ page.fileSlug }}/',
  tags: ['post', 'travel'],
  vocab: 'event',
  changefreq: 'yearly',
  priority: 0.8,
  eleventyComputed: {
    start: data => data.relatedTrips[0] ? data.relatedTrips[0].data.trip.date : false,
    end: data => data.relatedTrips[0] ? data.relatedTrips[data.relatedTrips.length - 1].data.trip.date : false,
    geojson: data => {
      const relatedTrips = data.relatedTrips ? data.relatedTrips : [];
      const features = [];
      for (const trip of relatedTrips) {
        features.push(...trip.data.trip.geojson.features);
      }

      return {
        type: 'FeatureCollection',
        features,
      };
    },
    relatedTrips: data => {
      const trips = data.collections.trip;
      const tripId = data.tripId ? data.tripId.toString() : [];
      return trips.filter(trip => tripId.includes(trip.data.trip.id));
    },
  },
};
