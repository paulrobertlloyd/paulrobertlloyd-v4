const {Liquid} = require('liquidjs');

module.exports = (() => {
  const parser = new Liquid({
    cache: true,
    dynamicPartials: true,
    extname: '.liquid',
    root: ['./src/_includes', './src/_layouts'],
    globals: {
      app: require('../../src/_data/app'),
      dates: require('../../src/_data/dates'),
      navigation: require('../../src/_data/navigation'),
      srcsets: require('../../src/_data/srcsets')
    }
  });

  return parser;
})();
