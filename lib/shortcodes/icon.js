import { randomBytes } from "node:crypto";

/**
 * Get sprite from icons SVG
 * @param {string} id - Human readable icon name, i.e. GitHub
 * @param {string} [label] - Icon label
 * @param {string} [size] - Rendered icon height and width
 * @returns {string|undefined} SVG
 */
export const icon = (id, label = "", size = "1em") => {
  if (!id) {
    return;
  }

  let titleId = randomBytes(8).toString("hex");
  titleId += "-title";

  return label
    ? `<svg width="${size}" height="${size}" focusable="false" aria-labelledby="${titleId}" role="img">
  <title id="${titleId}">${label}</title>
  <use href="/assets/vectors/icons.svg#${id}"></use>
</svg>`
    : `<svg width="${size}" height="${size}" focusable="false" aria-hidden="true">
  <use href="/assets/vectors/icons.svg#${id}"></use>
</svg>`;
};
