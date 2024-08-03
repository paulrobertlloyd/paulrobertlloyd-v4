import { getDayOfYear } from "../utils/date.js";

/**
 * Get page permalink
 * @param {object} data - Page data
 * @returns {string} Page permalink
 */
export function permalink(data) {
  const date = new Date(data.published);
  const year = date.getFullYear();
  const day = String(getDayOfYear(date)).padStart(3, "0");

  return `${year}/${day}/${data.type_prefix}${data.type_index}`;
}
