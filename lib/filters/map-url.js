const process = require('node:process');

const {MAPBOX_TOKEN} = process.env;

const overlay = map => {
  // GeoJSON
  if (typeof map === 'object') {
    const geojson = encodeURIComponent(JSON.stringify(map));
    return `geojson(${geojson})`;
  }

  // Pin
  return map;
};

/**
 * Get static map URL
 *
 * @param {object|string} map - Map properties
 * @param {height} height - Map height
 * @param {width} width - Map width
 * @param {string} style_id - Style ID
 * @returns {string} Mapbox static image URL
 * @see {@link https://docs.mapbox.com/api/maps/static-images/}
 */
module.exports = (map, height, width, style_id = 'outdoors-v10') => {
  const parameters = {
    endpoint: 'styles',
    endpoint_version: 'v1',
    username: 'mapbox',
    style_id,
    type: 'static',
    overlay: overlay(map),
    position: 'auto',
    size: `${width || 1200}x${height || 480}@2x`,
  };
  const path = Object.values(parameters).join('/');

  const url = new URL(path, 'https://api.mapbox.com');
  url.searchParams.append('access_token', MAPBOX_TOKEN);
  url.searchParams.append('logo', false);
  url.searchParams.append('padding', 60);

  return url.href;
};
