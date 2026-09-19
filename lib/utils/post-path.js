import { DateToSxg as dateToSxg } from "newbase60";
import { getDayOfYear } from "./date.js";

/**
 * @typedef {(data: object, postType: object) => string} PostReference
 * Function building a reference to a post from page data and a post type
 */

/**
 * Get the day a post belongs to
 * @param {object} data - Page data
 * @returns {Date} Day
 */
const getDay = (data) =>
  new Date(data.start || data.published || data.page.date);

/**
 * Get a post’s position among posts of the same type published that day
 *
 * Short-form posts are named by their index (2017-04-26-2.markdown); posts with
 * a named slug are the first of their type that day, unless they say otherwise.
 * @param {object} data - Page data
 * @returns {number} Index
 */
const getIndex = (data) => Number(data.typeIndex ?? data.page.fileSlug) || 1;

/**
 * Get a post’s type prefix
 * @param {object} data - Page data
 * @param {object} postType - Post type
 * @returns {string} Prefix
 */
const getPrefix = (data, postType) => data.typePrefix ?? postType.prefix ?? "";

/**
 * Type prefix, day in NewBase60 and index
 * @type {PostReference}
 * @example a5YY1
 */
export const id = (data, postType = {}) =>
  `${getPrefix(data, postType)}${dateToSxg(getDay(data))}${getIndex(data)}`;

/**
 * Day, type prefix and index
 *
 * Slug-less types use it as their path; the rest redirect from it. Also names
 * the directory a post’s generated images are written to.
 * @type {PostReference}
 * @example 2026/039/n1
 */
export const short = (data, postType = {}) => {
  const day = getDay(data);
  const dayOfYear = String(getDayOfYear(day)).padStart(3, "0");
  const prefix = getPrefix(data, postType);

  return `${day.getFullYear()}/${dayOfYear}/${prefix}${getIndex(data)}`;
};

/**
 * Day, type prefix, index and slug
 * @type {PostReference}
 * @example 2026/054/a1/ski-school
 */
export const long = (data, postType) =>
  `${short(data, postType)}/${data.page.fileSlug}`;

/**
 * Build a path under a fixed base, ignoring the day
 * @param {string} base - Base path
 * @returns {PostReference} Path shape
 * @example collections/mission_patches
 */
export const under = (base) => (data) => `${base}/${data.page.fileSlug}`;
