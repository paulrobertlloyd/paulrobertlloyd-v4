/**
 * Decorate location with Microformats2 address classes
 * @param {object} properties - Post properties
 * @param {object} properties.location - Location
 * @returns {string|undefined} HTML
 */
export const adr = ({ location }) => {
  if (!location) return;

  let html = `<span class="h-adr">`;

  if (location.street_address) {
    html += `<span class="p-street-address">${location.street_address}</span>, `;
  }

  if (location.locality) {
    html += `<span class="p-locality">${location.locality}</span>, `;
  }

  if (location.country_name) {
    html += `<span class="p-country-name">${location.country_name}</span>`;
  }

  html += `</span>`;

  return html;
};
