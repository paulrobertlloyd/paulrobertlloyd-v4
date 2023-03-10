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
    icon: data => data.event.icon,
    slug: data => data.event.slug,
    summary: data => data.movie ? data.movie.Plot : data.event.summary,
    url: data => data.event.url,
    end: data => data.event.end,
    start: data => data.event.start,
    location: data => data.event.location,
    category: data => data.event.category || [],
  },
};
