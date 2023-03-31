const mapUrl = require('../utils/get-map-url.js');

module.exports = md => {
  const defaultImageRenderer = md.renderer.rules.image;

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const imgSrc = token.attrGet('src');

    if (imgSrc.startsWith('markdown:map')) {
      const parameters = new URLSearchParams(imgSrc);
      const key = parameters.get('markdown:map?key');
      const height = parameters.get('height');
      const width = parameters.get('width');
      const geojson = env[key];

      token.attrSet('src', mapUrl(geojson, height, width));

      tokens[idx] = token;
    }

    return defaultImageRenderer(tokens, idx, options, env, self);
  };
};
