const getImagePath = require('../../../lib/utils/get-image-path.js');
const getMovie = require('../../../lib/utils/get-movie.js');

module.exports = {
  layout: 'event',
  permalink: 'events/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
  tags: ['event'],
  vocab: 'event',
  rsvp: 'yes',
  changefreq: 'monthly',
  priority: 0.4,
  eleventyComputed: {
    image: async data => {
      const {movie, page} = data;
      if (movie) {
        return getImagePath(movie.Poster, page.fileSlug, 'events');
      }
    },
    movie: data => {
      const {url} = data;
      if (url && url.includes('imdb.com')) {
        return getMovie(url);
      }
    },
    place: data => {
      const places = data.collections.place;
      if (places) {
        return places.find(place => place.data.place.address['plus-code'] === data.placeId);
      }
    },
    product: async data => {
      const {movie} = data;
      if (movie) {
        return {
          photo: data.image,
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
    summary: data => data.movie ? data.movie.Plot : data.summary,
  },
};
