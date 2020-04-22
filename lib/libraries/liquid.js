const {Liquid} = require('liquidjs');

module.exports = (() => {
  const parser = new Liquid({
    cache: true,
    dynamicPartials: true,
    extname: '.liquid',
    root: ['./src/includes', './src/layouts'],
    globals: {
      app: require('../../src/_data/app'),
      dates: require('../../src/_data/dates'),
      navigation: require('../../src/_data/navigation'),
      srcsets: require('../../src/_data/srcsets'),
      venues: require('../../src/_data/venues')()
    },
    strictFilters: true
  });

  return parser;
})();
