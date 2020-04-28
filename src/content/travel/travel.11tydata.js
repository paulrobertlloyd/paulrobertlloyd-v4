module.exports = {
  layout: 'travel',
  type: 'entry',
  permalink: 'travel/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['post', 'travel'],
  vocab: 'event',
  changefreq: 'yearly',
  priority: 0.8,
  eleventyComputed: {
    start: data => {
      const relatedTrips = data.related_trips;
      if (relatedTrips) {
        return relatedTrips[0].data.trip.date;
      }
    },
    end: data => {
      const relatedTrips = data.related_trips;
      if (relatedTrips) {
        return relatedTrips[relatedTrips.length - 1].data.trip.date;
      }
    },
    geojson: data => {
      const relatedTrips = data.related_trips;
      if (relatedTrips) {
        const features = [];
        relatedTrips.forEach(trip => {
          features.push(...trip.data.trip.geojson.features);
        });

        return {
          type: 'FeatureCollection',
          features
        };
      }
    },
    related_trips: data => {
      const trips = data.collections.trip;
      if (trips && data.trip_id) {
        return trips.filter(trip => data.trip_id.includes(trip.data.trip.id));
      }
    }
  }
};
