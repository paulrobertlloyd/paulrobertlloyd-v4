import { formatPublishedDate } from "../utils/date.js";

/**
 * Get published or date range formatted with HTML `time` elements
 * @param {Date} published - Published date
 * @param {string} [timeZone] - Time zone
 * @param {boolean} [shouldShowTime] - Include the time of day
 * @returns {string} HTML
 */
export const published = (published, timeZone, shouldShowTime = false) => {
  published = new Date(published);

  const datePublished = shouldShowTime
    ? formatPublishedDate(published, timeZone)
    : new Intl.DateTimeFormat("en-GB", {
        dateStyle: "long",
        timeZone,
      }).format(published);

  return `<time class="dt-published" datetime="${published.toISOString()}">${datePublished}</time>`;
};
