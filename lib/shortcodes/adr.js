import { html } from "../utils/html.js";

/**
 * Decorate location with Microformats2 address classes
 * @param {object} location - Location
 * @returns {string|undefined} HTML
 */
export const getAdrHtml = (location) => {
  if (!location) {
    return;
  }

  const { countryName, locality, streetAddress } = location;
  const parts = [];

  if (streetAddress) {
    parts.push(html`<span class="p-street-address">${streetAddress}</span>`);
  }

  if (locality) {
    parts.push(html`<span class="p-locality">${locality}</span>`);
  }

  if (countryName) {
    parts.push(html`<span class="p-country-name">${countryName}</span>`);
  }

  return `<span class="h-adr">${parts.join(", ")}</span>`;
};
