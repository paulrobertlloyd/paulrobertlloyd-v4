import { html } from "../utils/html.js";

/**
 * Get sprite from icons SVG
 * @param {string} id - Icon name, for example `github`
 * @param {string} [label] - Accessible label; icon is decorative without one
 * @param {string} [size] - Rendered icon height and width
 * @returns {string|undefined} SVG
 */
export const getIconSvg = (id, label = "", size = "1em") => {
  if (!id) {
    return;
  }

  const attributes = label
    ? html`role="img" aria-label="${label}"`
    : html`aria-hidden="true"`;

  return String(
    html`<svg width="${size}" height="${size}" focusable="false" ${attributes}>
      <use href="/assets/vectors/icons.svg#${id}"></use>
    </svg>`,
  );
};
