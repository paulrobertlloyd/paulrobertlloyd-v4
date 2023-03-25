const _ = require('lodash');

/**
 * Get embed HTML
 *
 * @param {object} attributes - oEmbed attributes
 * @returns {string} HTML for embed
 */
module.exports = async function (attributes) {
  const embedHtml = `<a href="${attributes.url}">
    <img class="embed__poster" src="${attributes.thumbnail_url}" height="${attributes.thumbnail_height}" width="${attributes.thumbnail_width}" loading="lazy" style="aspect-ratio: ${attributes.width} / ${attributes.height}">
    <p class="embed__meta">
      <svg class="icon" focusable="false" aria-hidden="true" height="1em" width="1em"><use href="/assets/vectors/icons.svg#play"></use></svg>
      ${attributes.title}<br>
      <small class="embed__hostname">${attributes.provider_name}</small>
    </p>
  </a>`;

  if (attributes.caption) {
    const captionHtml = `<figcaption>${_.unescape(attributes.caption)}</figcaption>`;

    return `<figure class="embed">${embedHtml}${captionHtml}</figure>`;
  }

  return `<figure class="embed">${embedHtml}</figure>`;
};
