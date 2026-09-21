import { formatDate, formatDateTime } from "../utils/date.js";
import { html } from "../utils/html.js";

/**
 * Get a published date as an HTML `time` element
 * @param {Date} date - Published date
 * @param {string} [timeZone] - Time zone
 * @param {boolean} [shouldShowTime] - Include the time of day
 * @returns {string} HTML
 */
export const getPublishedHtml = (date, timeZone, shouldShowTime = false) => {
  if (!date) {
    return "";
  }

  const format = shouldShowTime ? formatDateTime : formatDate;
  const published = new Date(date);
  const label = format(published, timeZone);

  return html`<time class="dt-published" datetime="${published.toISOString()}"
    >${label}</time
  >`;
};
