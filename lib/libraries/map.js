const mapUrl = require('../filters/map-url.js');

module.exports = md => {
  const proxy = (tokens, idx, options, env, self) => self.renderToken(tokens, idx, options);
  const defaultImageRenderer = md.renderer.rules.image || proxy;

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
