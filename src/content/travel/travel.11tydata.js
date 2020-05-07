module.exports = {
  layout: 'travel',
  type: 'entry',
  permalink: 'travel/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['post', 'travel'],
  vocab: 'event',
  changefreq: 'yearly',
  priority: 0.8,
  eleventyComputed: {
    start: data => data.related_trips ? data.related_trips[0].data.trip.date : false,
    end: data => data.related_trips ? data.related_trips[data.related_trips.length - 1].data.trip.date : false,
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
