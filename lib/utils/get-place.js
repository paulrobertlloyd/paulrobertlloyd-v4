const path = require('node:path');
const process = require('node:process');

const dataDir = path.resolve(process.env.PWD, 'src', '_data');
const places = require(path.join(dataDir, 'places'));

/**
 * Get place information
 *
 * @param {string} name - Place name
 * @returns {object} Place data
 */
module.exports = name => places.find(place => place.name === name);
