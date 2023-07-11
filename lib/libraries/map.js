const getMapUrl = require('../utils/map-url.js');

module.exports = md => {
  const defaultImageRenderer = md.renderer.rules.image;

  // eslint-disable-next-line max-params
  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const imgSrc = token.attrGet('src');

    if (imgSrc.startsWith('markdown:map')) {
      const parameters = new URLSearchParams(imgSrc);
      const key = parameters.get('markdown:map?key');
      const height = parameters.get('height');
      const width = parameters.get('width');
      const geojson = env[key];

      token.attrSet('src', getMapUrl(geojson, height, width));

      tokens[idx] = token;
    }

    return defaultImageRenderer(tokens, idx, options, env, self);
  };
};
