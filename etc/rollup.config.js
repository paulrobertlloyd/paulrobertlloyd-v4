const {terser} = require('rollup-plugin-terser');

const plugins = [
  terser(),
];

module.exports = [{
  input: 'src/assets/scripts/search.js',
  output: {
    file: 'www/assets/scripts/search.js',
    format: 'es',
    sourcemap: true,
    name: 'search',
  },
  plugins,
}];
