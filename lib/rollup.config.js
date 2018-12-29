const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const {terser} = require('rollup-plugin-terser');

const plugins = [
  resolve({
    browser: true,
    jsnext: true,
    main: true
  }),
  commonjs(),
  terser()
];

module.exports = [{
  input: 'src/assets/scripts/app.js',
  output: {
    file: 'www/assets/scripts/app.js',
    format: 'iife',
    sourcemap: true,
    name: 'app'
  },
  plugins
}, {
  input: 'src/assets/scripts/search.js',
  output: {
    file: 'www/assets/scripts/search.js',
    format: 'iife',
    sourcemap: true,
    name: 'search'
  },
  plugins
}];
