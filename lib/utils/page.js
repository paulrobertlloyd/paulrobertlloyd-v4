import { DateToSxg as dateToSxg } from "newbase60";
import { getDayOfYear } from "./date.js";

/**
 * Get page ID
 * @param {object} data - Page data
 * @returns {string} Page ID
 */
export const getId = (data) => {
  const date = data.start || data.published || data.page.date;
  const sxg = dateToSxg(new Date(date));
  const index = data.typeIndex || data.page.fileSlug || 1;
  const prefix = data.typePrefix || "";

  return `${prefix}${sxg}${index}`;
};

/**
 * Get page permalink
 * @param {object} data - Page data
 * @returns {string} Page permalink
 */
export function getPermalink(data) {
  const date = new Date(data.start || data.published || data.page.date);
  const year = date.getFullYear();
  const day = String(getDayOfYear(date)).padStart(3, "0");
  const index = data.typeIndex || data.page.fileSlug || 1;
  const prefix = data.typePrefix || "";

  return `${year}/${day}/${prefix}${index}`;
}
