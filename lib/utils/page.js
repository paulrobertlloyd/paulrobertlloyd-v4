import { DateToSxg as dateToSxg } from "newbase60";
import { getDayOfYear } from "./date.js";
import { postTypes } from "../post-types.js";

/**
 * Get page ID
 * @param {object} data - Page data
 * @returns {string} Page ID
 */
export const getId = (data) => {
  const date = data.start || data.published || data.page.date;
  const sxg = dateToSxg(new Date(date));
  const index = getTypeIndex(data);
  const prefix = data.typePrefix ?? postTypes[data.type]?.prefix ?? "";

  return `${prefix}${sxg}${index}`;
};

/**
 * Get the permalink for a post
 *
 * A permalink set in front matter always wins, including `false`, which tells
 * Eleventy to write no file. Otherwise it’s derived from the post type, which
 * may not define one, in which case Eleventy falls back to the page’s location
 * on disk.
 * @param {object} data - Page data
 * @returns {string|boolean|undefined} Permalink
 */
export const getPermalink = (data) => {
  if (data.permalink || data.permalink === false) {
    return data.permalink;
  }

  const postType = postTypes[data.type];

  return postType?.permalink(data, postType);
};

/**
 * Get a post’s dated, indexed path, using its type’s prefix
 * @param {object} data - Page data
 * @returns {string} Path, for example `2000/092/a1`
 */
export const getPostShortPath = (data) =>
  getShortPath(data, postTypes[data.type]);

/**
 * Get a post’s dated, indexed path
 *
 * The stem of a post’s URL, and the directory its generated images are written
 * to. Slug-less types use it as their permalink; the rest append a slug.
 * @param {object} data - Page data
 * @param {object} [postType] - Post type
 * @param {string} [postType.prefix] - Type prefix
 * @returns {string} Path, for example `2000/092/a1`
 */
export const getShortPath = (data, postType = {}) => {
  const date = new Date(data.start || data.published || data.page.date);
  const day = String(getDayOfYear(date)).padStart(3, "0");
  const prefix = data.typePrefix ?? postType.prefix ?? "";

  return `${date.getFullYear()}/${day}/${prefix}${getTypeIndex(data)}`;
};

/**
 * Get a post’s index among posts of the same type published that day
 *
 * Short-form posts are named by their index (2017-04-26-2.markdown); posts with
 * a named slug are the first of their type that day, unless they say otherwise.
 * @param {object} data - Page data
 * @returns {number} Index
 */
export const getTypeIndex = (data) =>
  Number(data.typeIndex ?? data.page.fileSlug) || 1;
