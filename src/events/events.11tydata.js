const getMovie = require('../../lib/utils/get-movie.js');

module.exports = {
  tags: ['event'],
  vocab: 'event',
  rsvp: 'yes',
  changefreq: 'monthly',
  priority: 0.4,
  eleventyComputed: {
    photo: data => data.movie && data.movie.Poster
      ? {
          url: data.movie.Poster,
          alt: `Poster for ‘${data.title}’`
        }
      : false,

    movie: async data => {
      const {url} = data;
      if (url && url.includes('imdb.com')) {
        return getMovie(url);
      }
    },
    place: data => {
      const places = data.collections.place;
      const {placeId} = data.event;
      const {venue} = data.event;
      if (places && placeId) {
        const placeIdStart = placeId.split('+')[0]
        const venueStart = venue.toLowerCase().split(' ')[0]
        return places
           .map(place => place.data.place)
           .find(place =>
              place.address['plus-code'].startsWith(placeIdStart) &&
              place.title.toLowerCase().startsWith(venueStart)
           )
      }
    },
    product: async data => {
      const {movie} = data;
      if (movie) {
        return {
          photo: data.photo,
          title: data.title,
          rating: data.rating,
          info: [
            `Director\n: ${movie.Director}`,
            `Writer\n: ${movie.Writer}`,
            `Actors\n: ${movie.Actors}`,
          ].join('\n\n'),
        };
      }
    },
    slug: data => data.event.slug,
    summary: data => data.movie ? data.movie.Plot : data.event.summary,
    url: data => data.event.url,
    end: data => data.event.end,
    start: data => data.event.start,
    category: data => data.event.category || [],
  },
};
