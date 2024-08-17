/**
 * Decorate location with Microformats2 address classes
 * @param {object} properties - Post properties
 * @param {object} properties.location - Location
 * @returns {string|undefined} HTML
 */
export const adr = ({ location }) => {
  if (!location) return;

  let html = `<span class="h-adr">`;

  if (location.streetAddress) {
    html += `<span class="p-street-address">${location.streetAddress}</span>, `;
  }

  if (location.locality) {
    html += `<span class="p-locality">${location.locality}</span>, `;
  }

  if (location.countryName) {
    html += `<span class="p-country-name">${location.countryName}</span>`;
  }

  html += `</span>`;

  return html;
};
