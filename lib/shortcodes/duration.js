import { html } from "../utils/html.js";

const SEPARATOR = "\u{2009}–\u{2009}";

/**
 * Get a date as an HTML `time` element
 * @param {string} className - Microformats class
 * @param {Date} date - Date
 * @param {string} label - Human-readable date
 * @returns {string} HTML
 */
const time = (className, date, label) =>
  html`<time class="${className}" datetime="${date.toISOString()}"
    >${label}</time
  >`;

/**
 * Get a date, or a date range, formatted with HTML `time` elements
 * @param {Date} startDate - Start date
 * @param {Date} [endDate] - End date
 * @returns {string} HTML
 */
export const getDurationHtml = (startDate, endDate) => {
  if (!startDate) {
    return "";
  }

  const start = new Date(startDate);

  if (!endDate) {
    const label = new Intl.DateTimeFormat("en-GB", {
      month: "long",
      day: "numeric",
    }).format(start);

    return time("dt-start", start, label);
  }

  const end = new Date(endDate);

  // A start with no time of day means an all-day event
  const isAllDay = start.getUTCHours() === 0 && start.getUTCMinutes() === 0;

  const range = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
    ...(!isAllDay && { timeStyle: "short", hourCycle: "h12" }),
  }).formatRange(start, end);

  const [from, to] = range.split("–").map((part) => part.trim());

  return to
    ? `${time("dt-start", start, from)}${SEPARATOR}${time("dt-end", end, to)}`
    : time("dt-start", start, from);
};
