/**
 * Get date range formatted with HTML `time` elements
 * @param {Date} start - Start date
 * @param {Date} [end] - End date
 * @returns {string} HTML
 */
export const duration = (start, end) => {
  if (start && end) {
    start = new Date(start);
    end = new Date(end);

    const options = {
      dateStyle: "long",
    };

    if (start.getHours() > 1) {
      options.timeStyle = "short";
      options.hourCycle = "h12";
    }

    const dateRange = new Intl.DateTimeFormat("en-GB", options).formatRange(
      start,
      end,
    );

    const dates = dateRange.split(`–`).map((item) => item.trim());

    return dates.length > 1
      ? `<time class="dt-start" datetime="${start.toISOString()}">${dates[0]}</time>\u{2009}–\u{2009}<time class="dt-end" datetime="${end.toISOString()}">${dates[1]}</time>`
      : `<time class="dt-start" datetime="${start.toISOString()}">${dates[0]}</time>`;
  }

  start = new Date(start);

  const startDate = new Intl.DateTimeFormat("en-GB", {
    month: "long",
    day: "numeric",
  }).format(start);

  return `<time class="dt-start" datetime="${start.toISOString()}">${startDate}</time>`;
};
