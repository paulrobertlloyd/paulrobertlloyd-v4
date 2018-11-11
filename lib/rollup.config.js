const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

module.exports = {
  input: 'src/assets/scripts/app.js',
  plugins: [
    resolve({
      browser: true,
      jsnext: true,
      main: true
    }),
    commonjs()
  ],
  output: {
    file: 'www/assets/scripts/app.js',
    format: 'iife',
    sourcemap: true,
    name: 'app'
  }
};
