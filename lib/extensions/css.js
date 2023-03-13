const path = require('node:path');
const browserslist = require('browserslist');
const css = require('lightningcss');

module.exports = {
  outputFileExtension: 'css',

  async compile(_inputContent, inputPath) {
    const {name} = path.parse(inputPath);

    if (name.startsWith('_')) {
      return;
    }

    const {code} = await css.bundleAsync({
      drafts: {
        customMedia: true,
      },
      filename: inputPath,
      minify: true,
      sourceMap: true,
      targets: css.browserslistToTargets(browserslist('>= 0.5%')),
    });

    return _data => code;
  },
};
