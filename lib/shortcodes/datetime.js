/**
 * Get published or date range formatted with HTML `time` elements
 * @param {Date} published - Published date
 * @param {Date} start - Start date
 * @param {Date} end - End date
 * @param {string} timeZone - Time zone
 * @param {string} title - Page title
 * @returns {string} HTML
 */
export const datetime = (published, start, end, timeZone, title) => {
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
  }

  published = new Date(published);

  const datePublished = title
    ? new Intl.DateTimeFormat("en-GB", {
        dateStyle: "long",
        timeZone,
      }).format(published)
    : new Intl.DateTimeFormat("en-GB", {
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
      }).format(published);

  return `<time class="dt-published" datetime="${published.toISOString()}">${datePublished}</time>`;
};
