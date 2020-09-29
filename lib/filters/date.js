const {format, zonedTimeToUtc} = require('date-fns-tz');

/**
 * Format a date
 *
 * @param {String} string ???
 * @param {String} format ???
 * @return {String} Formatted date
 */
module.exports = (string, dateFormat, timeZone) => {
  const now = new Date().toISOString();
  const dateString = string === 'now' ? now : string;
  const zonedDate = zonedTimeToUtc(dateString, process.env.TZ);
  return format(zonedDate, dateFormat, {
    timeZone: timeZone || process.env.TZ
  });
};
