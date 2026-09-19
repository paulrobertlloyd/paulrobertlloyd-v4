import { formatPublishedDate } from "../utils/date.js";

/**
 * Get published or date range formatted with HTML `time` elements
 * @param {Date} published - Published date
 * @param {string} [timeZone] - Time zone
 * @param {boolean} [simple] - Show only the date, not time or time zone
 * @returns {string} HTML
 */
export const published = (published, timeZone, simple) => {
  published = new Date(published);

  const datePublished = simple
    ? new Intl.DateTimeFormat("en-GB", {
        dateStyle: "long",
        timeZone,
      }).format(published)
    : formatPublishedDate(published, timeZone);

  return `<time class="dt-published" datetime="${published.toISOString()}">${datePublished}</time>`;
};
