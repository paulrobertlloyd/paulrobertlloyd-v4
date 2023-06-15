const getMapUrl = require('../utils/map-url.js');

/**
 * Get HTML `picture` element for set of map image sources
 * @param {object} map - Map data object
 * @param {number} height - Height of map
 * @param {number} width - Width of map
 * @param {number} [alt] - Alternative text for map
 * @returns {string} HTML `picture` element
 */
module.exports = (map, height, width, alt = '') => `<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="${getMapUrl(map, height, width, 'dark-v10')}">
  <img src="${getMapUrl(map, height, width)}" alt="${alt}">
</picture>`;
