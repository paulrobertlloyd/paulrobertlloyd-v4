import { getShortPath } from "./page.js";

/**
 * @typedef {(data: object, postType: object) => string} GetPermalink
 * Function returning a permalink for the given page data
 */

/**
 * Get a permalink made up of a date, type prefix and index
 *
 * Used by short-form posts, which are named by their index.
 * @type {GetPermalink}
 * @example /2026/039/n1/
 */
export const indexed = (data, postType) => `${getShortPath(data, postType)}/`;

/**
 * Get a permalink made up of a date, type prefix, index and slug
 *
 * Used by posts with a title, which are named by their slug.
 * @type {GetPermalink}
 * @example /2026/054/a1/ski-school/
 */
export const indexedWithSlug = (data, postType) =>
  `${indexed(data, postType)}${data.page.fileSlug}/`;

/**
 * Get a permalink under a fixed path, ignoring the date
 *
 * Used by posts that aren’t tied to the day they were published.
 * @param {string} base - Base path
 * @returns {GetPermalink} Permalink function
 * @example /collections/mission_patches/
 */
export const underPath = (base) => (data) => `${base}/${data.page.fileSlug}/`;
