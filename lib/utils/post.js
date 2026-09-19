import * as postPath from "./post-path.js";
import { postTypes } from "../post-types.js";

/**
 * Get a value as written in front matter
 *
 * While resolving a computed value that reads its own key, Eleventy sets that
 * key to an empty string. Treat that placeholder as unset so a post type’s
 * default can apply, while keeping a real value of `false`.
 * @template T
 * @param {T} value - Value from page data
 * @returns {T|undefined} Value, unless Eleventy is still resolving it
 */
const ifSet = (value) => (value === "" ? undefined : value);

/**
 * Get everything a post derives from its type
 *
 * Values are lazy, so asking for a permalink doesn’t compute an ID.
 * @param {object} data - Page data
 * @returns {object} Post
 */
export const getPost = (data) => {
  const postType = postTypes[data.type];

  return {
    /**
     * The post’s type, or undefined if the page isn’t a post
     * @returns {object|undefined} Post type
     */
    get type() {
      return postType;
    },

    /**
     * A permalink set in front matter always wins, including `false`, which
     * tells Eleventy to write no file. Otherwise it comes from the post type;
     * anything that isn’t a post keeps Eleventy’s own default.
     * @returns {string|boolean|undefined} Permalink
     */
    get permalink() {
      return data.permalink || data.permalink === false
        ? data.permalink
        : postType && `${postType.path(data, postType)}/`;
    },

    /**
     * Day, type prefix and index
     * @returns {string} Short path
     * @example 2000/092/a1
     */
    get shortPath() {
      return postPath.short(data, postType);
    },

    /**
     * Type prefix, day in NewBase60 and index
     * @returns {string} ID
     * @example a5YY1
     */
    get id() {
      return postPath.id(data, postType);
    },

    /**
     * @returns {boolean|undefined} Whether the post is syndicated
     */
    get syndicate() {
      return ifSet(data.syndicate) ?? postType?.syndicate;
    },

    /**
     * @returns {string|undefined} Whether the post is listed
     */
    get visibility() {
      return ifSet(data.visibility) ?? postType?.visibility;
    },

    /**
     * @returns {string} Microformats vocabulary
     */
    get vocabulary() {
      return ifSet(data.vocabulary) ?? postType?.vocabulary ?? "entry";
    },
  };
};
