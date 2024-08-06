/**
 * Get sprite from icons SVG
 * @param {string} id - Human readable icon name, i.e. GitHub
 * @param {string|boolean} [label] - Icon label
 * @param {string} [size] - Rendered icon height and width
 * @returns {string|undefined} SVG
 */
export const icon = (id, label = false, size = "1em") => {
  if (!id) {
    return;
  }

  return label
    ? `<svg width="${size}" height="${size}" focusable="false" aria-labelledby="${id}-title" role="img">
  <title id="${id}-title">${label}</title>
  <use href="/assets/vectors/icons.svg#${id}"></use>
</svg>`
    : `<svg width="${size}" height="${size}" focusable="false" aria-hidden="true">
  <use href="/assets/vectors/icons.svg#${id}"></use>
</svg>`;
};
