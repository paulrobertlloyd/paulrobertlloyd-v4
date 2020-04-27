module.exports = {
  layout: 'event',
  permalink: 'events/{{ page.date | date: "%Y/%m" }}/{{ page.fileSlug }}/',
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
        return `https://img.omdbapi.com/?apikey=e2e2ef5c&i=${imdbId}&h=560`;
      }
    },
    share_image: data => data.image,
    venue: data => {
      const venues = data.collections.venue;
      if (venues) {
        return venues.find(venue => {
          const venue_id = venue.data.venue.address['plus-code'].toLowerCase();
          return venue_id === data.venue_id;
        });
      }
    },
  }
};
