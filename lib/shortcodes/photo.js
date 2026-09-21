import { html } from "../utils/html.js";

/**
 * Get the markup for a post’s images
 * @param {Array<object>} photos - Images, each with a `url` and `alt`
 * @returns {string} HTML
 */
export const getPhotoHtml = (photos) => {
  if (!photos?.length) {
    return "";
  }

  const image = ({ alt, url }) =>
    html`<img src="${url}" alt="${alt}" class="u-photo">`;

  if (photos.length === 1) {
    return html`<figure>${image(photos[0])}</figure>`;
  }

  const items = photos.map((photo) => html`<li>${image(photo)}</li>`);

  return html`<ul>${items}</ul>`;
};
