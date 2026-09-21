import { html } from "../utils/html.js";

/**
 * Get the markup for a jam
 * @param {object} jam - Jam
 * @param {string} jam.author - Artist
 * @param {string} jam.name - Track name
 * @param {string} jam.url - Link to the track
 * @returns {string} HTML
 */
export const getJamHtml = (jam) => {
  const name = html`<cite class="p-name">${jam.name}</cite>`;
  const link = html`<a class="u-url" href="${jam.url}">${name}</a>`;
  const author = html`<span class="p-author h-card">${jam.author}</span>`;
  const cite = html`<p class="h-cite">♫ ${link} by ${author}</p>`;

  return html`<apple-jam>${cite}</apple-jam>`;
};
