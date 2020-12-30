const {format, zonedTimeToUtc} = require('date-fns-tz');
const enGB = require('date-fns/locale/en-GB');

/**
 * Format a date
 *
 * @param {string} string Date
 * @param {string} dateFormat Desired date format
 * @param {string} timeZone Desired timezone
 * @returns {string} Formatted date
 */
module.exports = (string, dateFormat, timeZone) => {
  const now = new Date().toISOString();
  const dateString = string === 'now' ? now : string;
  const zonedDate = zonedTimeToUtc(dateString, process.env.TZ);
  return format(zonedDate, dateFormat, {
    locale: enGB,
    timeZone: timeZone || process.env.TZ
  });
};
