const {Liquid} = require('liquidjs');

module.exports = (() => {
  const parser = new Liquid({
    cache: true,
    dynamicPartials: true,
    extname: '.liquid',
    root: ['./src/includes', './src/layouts'],
    globals: {
      app: require('../../src/data/app'),
      dates: require('../../src/data/dates'),
      navigation: require('../../src/data/navigation'),
      srcsets: require('../../src/data/srcsets'),
      venues: require('../../src/data/venues')
    },
    strictFilters: true
  });

  return parser;
})();
