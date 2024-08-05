/**
 * Get published or date range formatted with HTML `time` elements
 * @param {object} properties - Post properties
 * @param {Date} properties.published - Published date
 * @param {Date} [properties.start] - Start date
 * @param {Date} [properties.end] - End date
 * @param {string} [properties.time_zone] - Time zone
 * @param {showtime} [showtime] - Showtime
 * @returns {string} HTML
 */
export const datetime = (
  { published, start, end, time_zone: timeZone },
  showtime,
) => {
  if (start && end) {
    start = new Date(start);
    end = new Date(end);

    const options = {
      dateStyle: "long",
      timeZone,
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

    return `<time class="dt-start" datetime="${start.toISOString()}">${dates[0]}</time>\u{2009}–\u{2009}<time class="dt-end" datetime="${end.toISOString()}">${dates[1]}</time>`;
  } else {
    if (start) {
      start = new Date(start);

      const startDate = new Intl.DateTimeFormat("en-GB", {
        month: "long",
        day: "numeric",
        timeZone,
      }).format(start);

      return `<time class="dt-start" datetime="${start.toISOString()}">${startDate}</time>`;
    }
  }

  published = new Date(published);

  const datePublished = showtime
    ? new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hourCycle: "h12",
        timeZone,
        ...(timeZone && {
          timeZoneName: "shortGeneric",
        }),
      }).format(published)
    : new Intl.DateTimeFormat("en-GB", {
        dateStyle: "long",
        timeZone,
      }).format(published);

  return `<time class="dt-published" datetime="${published.toISOString()}">${datePublished}</time>`;
};
