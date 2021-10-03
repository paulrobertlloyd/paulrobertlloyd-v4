module.exports = {
  layout: 'event',
  permalink: 'events/{{ page.date | date: "yyyy/MM" }}/{{ page.fileSlug }}/',
  tags: ['event'],
  vocab: 'event',
  rsvp: 'yes',
  changefreq: 'monthly',
  priority: 0.4,
  eleventyComputed: {
    image: page => {
      const {url} = page;
      if (url && url.includes('imdb.com')) {
        const imdbId = url.replace(/https:\/\/www\.imdb\.com\/title\/(\w*)\/?/, '$1');
        return `https://img.omdbapi.com/?apikey=e2e2ef5c&i=${imdbId}&h=960`;
      }
    },
    shareImage: data => data.image,
    place: data => {
      const places = data.collections.place;
      if (places) {
        return places.find(place => {
          const placeId = place.data.place.address['plus-code'].toLowerCase();
          return placeId === data.placeId;
        });
      }
    },
  },
};
