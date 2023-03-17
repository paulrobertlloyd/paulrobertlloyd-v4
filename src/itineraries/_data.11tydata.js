module.exports = {
  layout: 'itinerary',
  type: 'entry',
  type_prefix: 'i',
  permalink: 'travel/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['post', 'itinerary'],
  vocab: 'event',
  changefreq: 'yearly',
  priority: 0.8,
  eleventyComputed: {
    start: data => data.relatedTrips[0] ? data.relatedTrips[0].date : false,
    end: data => data.relatedTrips[0] ? data.relatedTrips[data.relatedTrips.length - 1].date : false,
    geojson(data) {
      const relatedTrips = data.relatedTrips && data.relatedTrips;
      const features = [];
      for (const trip of relatedTrips) {
        features.push(...trip.data.geojson.features);
      }

      return {
        type: 'FeatureCollection',
        features,
      };
    },
    relatedTrips(data) {
      const trips = data.collections.trip;
      const tripId = data.trip_id ? data.trip_id.toString() : [];
      return trips.filter(trip => tripId.includes(trip.data.uid));
    },
  },
};
