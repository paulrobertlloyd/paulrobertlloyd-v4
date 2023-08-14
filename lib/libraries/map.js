const getMapUrl = require("../utils/map-url.js");

module.exports = (md) => {
  const defaultImageRenderer = md.renderer.rules.image;

  // eslint-disable-next-line max-params
  md.renderer.rules.image = (tokens, index, options, environment, self) => {
    const token = tokens[index];
    const imgSource = token.attrGet("src");

    if (imgSource.startsWith("markdown:map")) {
      const parameters = new URLSearchParams(imgSource);
      const key = parameters.get("markdown:map?key");
      const height = parameters.get("height");
      const width = parameters.get("width");
      const geojson = environment[key];

      token.attrSet("src", getMapUrl(geojson, height, width));

      tokens[index] = token;
    }

    return defaultImageRenderer(tokens, index, options, environment, self);
  };
};
