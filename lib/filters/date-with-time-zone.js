const process = require('node:process');
const {format, zonedTimeToUtc} = require('date-fns-tz');
const enGB = require('date-fns/locale/en-GB/index.js');

/**
 * Format a date
 * @param {string} string - Date
 * @param {string} timeZone - Desired timezone
 * @param {string} dateFormat - Desired date format
 * @returns {string} Formatted date
 */
module.exports = (string, timeZone, dateFormat = 'd MMMM yyyy, h:mm\'&nbsp;\'aaaaa\'m\' zzz') => {
  const zonedDate = zonedTimeToUtc(string, process.env.TZ);
  return format(zonedDate, dateFormat, {
    locale: enGB,
    timeZone: timeZone || process.env.TZ,
  });
};
