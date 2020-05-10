module.exports = {
  layout: 'travel',
  type: 'entry',
  permalink: 'travel/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
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
      relatedTrips.forEach(trip => {
        features.push(...trip.data.trip.geojson.features);
      });

      return {
        type: 'FeatureCollection',
        features
      };
    },
    relatedTrips: data => {
      const trips = data.collections.trip;
      const tripId = data.tripId ? data.tripId : [];
      return trips.filter(trip => tripId.includes(trip.data.trip.id));
    }
  }
};
