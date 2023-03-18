/**
 * Get trip title
 *
 * @param {Array} itinerary - Trip itinerary
 * @returns {string} Trip title
 */
module.exports = async function (itinerary) {
  return `${itinerary[0].locality}, ${itinerary[0].country_name} ➔ ${itinerary.at(-1).locality}, ${itinerary.at(-1).country_name}`;
};
