const {Liquid} = require('liquidjs');

module.exports = (() => {
  const parser = new Liquid({
    cache: true,
    dynamicPartials: true,
    extname: '.liquid',
    root: ['./src/_includes', './src/_layouts']
  });

  return parser;
})();
